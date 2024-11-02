 export const baseUrl = "https://shortclick.onrender.com";
// export const baseUrl = 'http://localhost:8000'

// "email": "emmy@gmail.com",
//"password": "emmy123"
export const handleSignin = async (email: string, password: string) => {
  const url = `${baseUrl}/auth/login`; // Replace with your API endpoint

  const payload = {
    email,
    password,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
        Accept: "application/json",
      },
      body: JSON.stringify(payload), // Convert the payload to a JSON string
    });

    const data = await response.json();
    console.log("Login successful:", data);
    return data;
  } catch (error) {
    console.error("Login failed:", error);
  }
};

export const handleSignup = async (
  email: string,
  password: string,
  username: string
) => {
  const url = `${baseUrl}/auth/register`; // Replace with your API endpoint

  const payload = {
    email,
    password,
    username,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
        Accept: "application/json",
      },
      body: JSON.stringify(payload), // Convert the payload to a JSON string
    });

    const data = await response.json();
    console.log("Registration successful:", data);
    return data;
  } catch (error) {
    console.error("registration failed:", error);
  }
};

export const shortenUrl = async (origUrl: string) => {
  const url = `${baseUrl}/urls/free`; // Replace with your API endpoint

  const payload = {
    origUrl,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
        Accept: "application/json",
      },
      body: JSON.stringify(payload), // Convert the payload to a JSON string
    });

    const data = await response.json();
    console.log("URL successfuly shortened:", data);
    return data;
  } catch (error) {
    console.error("Shortening failed:", error);
  }
};




export const customUrl = async (token: string | null, origUrl: string, customDomain?: string, customSlug?: string) => {
  const url = `${baseUrl}/urls/user`; // Replace with your API endpoint

  const payload = {
    origUrl,
    customDomain,
    customSlug
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
        Accept: "application/json",
      },
      body: JSON.stringify(payload), // Convert the payload to a JSON string
    });

    const data = await response.json();
    console.log("URL successfuly shortened:", data);
    return data;
  } catch (error) {
    console.error("Shortening failed:", error);
  }
};
