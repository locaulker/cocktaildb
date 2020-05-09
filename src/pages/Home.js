import React, { useState } from "react"
import CocktailList from "../components/CocktailList"
import SearchForm from "../components/SearchForm"

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("s")
  const [cocktails, setCocktails] = useState([])

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  )
}

export default Home
