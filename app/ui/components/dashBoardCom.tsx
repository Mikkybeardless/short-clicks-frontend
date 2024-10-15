"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Clipboard, Trash2 } from 'lucide-react'

const data = [
  { name: "Jan", clicks: 400 },
  { name: "Feb", clicks: 300 },
  { name: "Mar", clicks: 200 },
  { name: "Apr", clicks: 278 },
  { name: "May", clicks: 189 },
  { name: "Jun", clicks: 239 },
]

export default function Dashboard() {
  const [links, setLinks] = useState([
    { id: 1, original: "https://www.example.com/very/long/url/1", short: "https://short.url/abc123", clicks: 145 },
    { id: 2, original: "https://www.example.com/another/long/url/2", short: "https://short.url/def456", clicks: 89 },
    { id: 3, original: "https://www.example.com/yet/another/long/url/3", short: "https://short.url/ghi789", clicks: 217 },
  ])

  const [newUrl, setNewUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically make an API call to create a new short URL
    const newLink = {
      id: links.length + 1,
      original: newUrl,
      short: `https://short.url/${Math.random().toString(36).substr(2, 6)}`,
      clicks: 0
    }
    setLinks([...links, newLink])
    setNewUrl('')
  }

  const handleDelete = (id: number) => {
    setLinks(links.filter(link => link.id !== id))
  }

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url)
    alert("Copied to clipboard!")
  }

  return (
    <main className="min-h-screen text-base-200 dark:text-base-content dark:bg-base-200 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="stat bg-primary ">
            <div className="stat-title text-base-200 dark:text-primary-content">Total Links</div>
            <div className="stat-value">{links.length}</div>
          </div>
          <div className="stat bg-secondary ">
            <div className="stat-title text-base-200 dark:text-secondary-content">Total Clicks</div>
            <div className="stat-value">{links.reduce((sum, link) => sum + link.clicks, 0)}</div>
          </div>
          <div className="stat bg-accent ">
            <div className="stat-title text-base-200 dark:text-accent-content">Avg. Clicks per Link</div>
            <div className="stat-value">{(links.reduce((sum, link) => sum + link.clicks, 0) / links.length).toFixed(2)}</div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Create New Short URL</h2>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="url"
              placeholder="Enter long URL"
              className="bg-[#EEEEEE] rounded-md h-8 text-base-200 dark:text-[#EEEEEE] px-4 py-5 focus:outline-none dark:input dark:input-bordered w-full flex-grow"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">Shorten</button>
          </form>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Links</h2>
          <div className="overflow-x-auto">
            <table className="table   w-full">
              <thead>
                <tr className="dark:text-base-content text-base-200">
                  <th>Original URL</th>
                  <th>Short URL</th>
                  <th>Clicks</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {links.map(link => (
                  <tr key={link.id}>
                    <td className="max-w-xs truncate">{link.original}</td>
                    <td>{link.short}</td>
                    <td>{link.clicks}</td>
                    <td>
                      <button onClick={() => handleCopy(link.short)} className="btn btn-sm btn-ghost">
                        <Clipboard size={16} />
                      </button>
                      <button onClick={() => handleDelete(link.id)} className="btn btn-sm btn-ghost text-error">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Click Analytics</h2>
          <div className="h-80 bg-base-100 rounded-box p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="clicks" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </main>
  )
}