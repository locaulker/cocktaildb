import React, { useRef, useEffect } from "react"

const SearchForm = ({ setSearchTerm }) => {
  const searchValue = useRef("")

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
  }

  const searchCocktail = () => {
    console.log(searchValue.current.value)
    setSearchTerm(searchValue.current.value)
  }

  return (
    <section className="section">
      <h2 className="section-title">Search Your Favorite Cocktail</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Enter Search term</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={searchCocktail}
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
