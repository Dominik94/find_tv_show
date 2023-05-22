import React from 'react'

import classes from './Item.module.css'
import noImage from '../assets/image_not_supported.svg'

const Item = props => {
	if (props.element.show) {
		return (
			<li className={classes.item} key={props.element.show.id}>
				<a className={classes.link} target='_blank' rel="noopener noreferrer" href={props.element.show.url}>
					<div className={classes.image}>
						{props.element.show.image ? (
							<img className={classes.img} src={props.element.show.image.medium} alt={props.element.show.name} />
						) : (
							<div className={classes.nophoto}>
								<img src={noImage} alt='brak obazka' />
							</div>
						)}
					</div>
					<div className={classes.title}>
						<p>{props.element.show.name}</p>
					</div>
				</a>
				<div className={classes.buttons}>
					<button className={classes.button}>Dodaj do ulubionych</button>
					<button className={classes.button}>Dodaj do kolejki</button>
				</div>
			</li>
		)
	} else if (props.element.person) {
		return (
			<li className={classes.item} key={props.element.person.id}>
				<a className={classes.link} target='_blank' rel="noopener noreferrer" href={props.element.person.url}>
					{props.element.person.image ? (
						<img className={classes.img} src={props.element.person.image.medium} alt={props.element.person.name} />
					) : (
						<div className={classes.nophoto}>
							<img src={noImage} alt='brak obazka' />
						</div>
					)}
					<div className={classes.title}>
					<p>{props.element.person.name}</p>
					</div>
				</a>
			</li>
		)
	}
}

export default Item
