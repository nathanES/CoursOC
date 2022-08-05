import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}
function CareScale({scaleValue, careType})
{
    const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={()=> onClickHandler(quantityLabel[scaleValue], careType)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}
function onClickHandler(quantityLabel,careType)
{

    alert(`Cette plante requiert ${quantityLabel} ${careType==='light' ? 'de lumière' : "d'arrosage"}`);
}
export default CareScale;