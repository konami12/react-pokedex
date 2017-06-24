function LinkImgPure(props)
{
	return (
				<a className={props.classLink} href={props.link} title={props.title}>
					<img className={props.classImg} src={props.imgPath}/>
					{props.subTitle}
				</a>
		   );
}

//======================================================================//

function PokeNamePure(props)
{
	return (
				<h1>
					{props.name}
					<small> {props.spices} </small>
					<span className="label label-primary pull-right"># {props.id}</span>
				</h1>
		   );
}

//======================================================================//

function PokeTypePure(props)
{
	return (
				<a href="#">
				  <span className={props.className}>
				    {props.type}
				  </span>
				</a>
		   );
}

//======================================================================//

function PokeCardPure(props)
{
	return (
				<div className="pokemon panel panel-primary">

					<div className="panel-heading">
						<PokeNamePure id = {props.id} name = {props.name}  spices = {props.spices}/>
					</div>

					<div className="panel-body">
						<LinkImgPure classImg = {props.classImg} imgPath = {props.imgPath} title = {props.name}/>
					</div>

					<div className="panel-footer">
						<div className="text-center">
							{
								(props.types).map(type => {
									let _class = `label type type-${type.toLowerCase()}`;
									return <PokeTypePure className={_class} type={type}/>
								})
							}
						</div>
					</div>

				</div>
		   );
}

//======================================================================//

function PokeHeaderPure(props)
{
	return (
				<div className="container-fluid">
					<div className="navbar-header">
						<LinkImgPure classLink={props.classLink} imgPath={props.imgPath} title={props.title} subTitle={props.subTitle}/>
					</div>
				</div>
		   );
}

//======================================================================//

function PokeListPure(props)
{
	return(
			<div className="col-lg-3">
				<PokeCardPure {...props}/>
			</div>
			
		  );
} 