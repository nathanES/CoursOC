function Recommendation()
{
    const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >= 2 && currentMonth<= 5;
    if(!isSpring)
    {
        return <div>Ce n'est pas le moment de rempoter</div>
    }
    else
    {
        return <div>C'est le primtemps, rempotez ! 🌱</div>
    }
}

export default Recommendation;