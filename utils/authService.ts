export async function login(username: string, password: string) {

    const response = await fetch(`/api/u/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (!response.ok) {
      throw new Error('Login failed');
    }
  
    
    const data = await response.json();
    console.log(data)
    return data;
  }
  
  export async function register(username: string, password: string) {
    const response = await fetch(`/api/u/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (!response.ok) {
      throw new Error('Registration failed');
    }
  
    const data = await response.json();
    return data;
  }