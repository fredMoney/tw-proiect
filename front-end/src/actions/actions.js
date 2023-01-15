const SERVER = "http://localhost:8080";

export function getBugs () {
    return {
        type: "GET_BUGS",
        payload: async () => {
            const response = await fetch(`${SERVER}/bugslist`);
            const data = await response.json();
            return data;
        }
    }
}

export function deleteBug (id) {
    return {
      type: 'DELETE_BUG',
      payload: async () => {
        await fetch(`${SERVER}/bugslist/${id}`, {
          method: 'delete'
        })
        const response = await fetch(`${SERVER}/bugslist`)
        const data = await response.json()
        return data
      }
    }
  }
  
  export function addBug (content) {
    return {
      type: 'ADD_BUG',
      payload: async () => {
        await fetch(`${SERVER}/bugslist`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ content })
        })
        const response = await fetch(`${SERVER}/bugslist`)
        const data = await response.json()
        return data
      }
    }
  }

export function authenticateUser(content) {
    return {
        type: "GET_USER",
        payload: async () => {
            const response = await fetch(`${SERVER}/login`);
            const data = await response.json();
            return data;
        }
    }
}

export function getBugBySummary(content) {
    return {
        type: "GET_BUG_BY_SUMMARY",
        payload: async () => {
            const response = await fetch(`${SERVER}/find-bug`);
            const data = await response.json();
            return data;
        }
    };
}
  