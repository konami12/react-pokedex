class PokeHeader extends React.Component
{
	constructor(props)
	{
		super(props)
	}

	render()
	{
		const props = {
							classLink : "navbar-brand",
							imgPath   : "img/logo.png",
							subTitle  : " Pokédex React",
							title     : "Pokédex"
					   };
		return(<PokeHeaderPure {...props}/>);
	}
}

//===================================================================//

class PokeList extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		const pokemons =  this.props.pokemons;
		return (
					<div className="row">
						{pokemons.map(poke => {
						  	let img = (poke.name).replace('♀', 'f')
                  							 	 .replace('♂', 'm')
                  								 .replace(/\W+/g, "");
							const props = {
											classImg : "avatar center-block",
											id       : poke.id,
											imgPath  : `./img/pokemons/${img.toLowerCase()}.jpg`, 
											name     : poke.name,
											spices   : poke.species,
											types    : poke.type
										 };
							return <PokeListPure key={poke.id} {...props}/>
						})}
					</div>
			   );
	}
}


ReactDOM.render(<PokeHeader />, document.getElementById("header"));
ReactDOM.render(<PokeList pokemons={pokeList}/>, document.getElementById("pokemon"));
