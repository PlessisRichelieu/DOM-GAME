
var scores, roundScore, activePlayer, gamePlaying, diceValue;

init ();




document.querySelector('.btn-roll').addEventListener('click', function(){
	if (gamePlaying)
	{	

		var dice = Math.floor(Math.random() * 6) + 1;
		diceValue+=dice;
		var diceDOM=document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src='dice-'+dice + '.png';

		if (dice!==1 && diceValue!==12)
		{
			roundScore+=dice;
			document.querySelector('#current-' + activePlayer).textContent=roundScore;
			
		}
		else 
		{
			diceValue=0;
			nextPlayer();
    	}	
	}
	


});

document.querySelector('.btn-hold').addEventListener('click', function(){

if (gamePlaying)
{

	scores[activePlayer]+=roundScore;   

	document.querySelector('#score-' + activePlayer).innerHTML=scores[activePlayer];
	document.querySelector('#current-' + activePlayer).textContent='0';

	if (scores[activePlayer]>=20)
	{
		document.querySelector('#name-'+activePlayer).textContent='WINNER!';
		document.querySelector('.dice').style.display='none';
		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
		gamePlaying=false;

	}
	else
	{

		nextPlayer();

	}	

}







})

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer ()
{
		activePlayer === 0 ? activePlayer =1 :activePlayer=0;
		roundScore=0;
		
		document.getElementById('current-0').textContent='0';
		document.getElementById('current-0').textContent='0';

		document.querySelector('.player-0-panel').classList.toggle('active');	
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.querySelector('.dice').style.display='none';
		document.querySelector('#current-' + activePlayer).textContent='0';
	
}

function init ()
{
	scores=[0,0];
	roundScore=0;
	activePlayer=0;
	diceValue=0;
	gamePlaying=true;

	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent='0';
	document.getElementById('score-1').textContent='0';
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';
	document.querySelector('#name-0').textContent='Player 1';
	document.querySelector('#name-1').textContent='Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');

}
