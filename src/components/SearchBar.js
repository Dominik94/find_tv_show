import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

import classes from './SearchBar.module.css'

const SearchBar = () => {
	const [data, setData] = useState([])
	const [state, setState] = useState({ name: '' })
	const [search, setSearch] = useState('shows')
	const [error, setError] = useState()
	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleChange = event => {
		setIsSubmitted(false)
		setState({ name: event.target.value })
	}

	const handleSubmit = event => {
		event.preventDefault()
		setIsSubmitted(true)
	}

	useEffect(() => {
		if (isSubmitted && state.name.length > 0) {
			fetch(`https://api.tvmaze.com/search/${search}?q=${state.name}`)
				.then(response => {
					if (response.ok) {
						console.log('ok', response.ok)
						return response.json()
					} else {
						console.log('status', response.status)
						throw new Error(response.status)
					}
				})
				.then(json => {
					setData(json)
					setError(null)
				})
				.catch(error => {
					console.error(error)
					setError(error)
				})
			setState({ name: '' })
		}
	}, [isSubmitted, state.name, search])

	return (
		<div className={classes.bar}>
			<form className={classes.search} onSubmit={handleSubmit}>
				<select className={classes.select} value={search} onChange={e => setSearch(e.target.value)}>
					<option className={classes.option} value='shows'><p>Serial</p></option>
					<option className={classes.option} value='people'><p>Aktor</p></option>
				</select>
				<div className={classes.box}>
					<input className={classes.input} type='name' onChange={handleChange} value={state.name} />
					<label className={classes.label} htmlFor='name'>
						Wpisz nazwę
					</label>
				</div>
				<button className={classes.button} type='submit'>
					Search
				</button>
			</form>
			<ItemList data={data} error={error} />
		</div>
	)
}

export default SearchBar
