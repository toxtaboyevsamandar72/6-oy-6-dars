import { useState, useEffect } from "react"

function useFetch(url) {
  const [data, setData] = useState(null)
  const [isPending, setIspending] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
        console.log("loading...");
        const req = await fetch(url)
        const data = await req.json()
        setData(data)
        setIspending(false)
    }
    fetchData()
  }, [url])

  return { data, isPending }
}

export { useFetch }