import "../App.css"
function ScoreCard(props){
    let {name,points,raids,tackles} = props
    return (
        <div className="box">
             <h1>Kabaddi</h1>
                <p>Name : {name}</p>
                <p>Points:{points}</p>
                <p>Raids: {raids}</p>
                <p>Tackles:{tackles}</p>
        </div>
    )
}
export default ScoreCard;