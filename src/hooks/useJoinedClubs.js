import { useEffect, useState } from 'react'

const STORAGE_KEY = 'campus-club-finder:joined-clubs'

function readJoined() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export default function useJoinedClubs() {
  const [joinedIds, setJoinedIds] = useState(readJoined)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(joinedIds))
    } catch {
  
    }
  }, [joinedIds])

  const isJoined = (clubId) => joinedIds.includes(clubId)

  const joinClub = (clubId) =>
    setJoinedIds((prev) => (prev.includes(clubId) ? prev : [...prev, clubId]))

  return { joinedIds, isJoined, joinClub }
}
