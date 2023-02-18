async function Get() {
    const URID = "76561198388103578";
    const resp = await fetch('https://new.scoresaber.com/api/player/' + URID + '/full');
    const json = await resp.json();
    document.getElementById("global").innerHTML += json.playerInfo.rank;
    document.getElementById("Regional").innerHTML += json.playerInfo.countryRank;
  }