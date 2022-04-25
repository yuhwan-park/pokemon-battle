const $body = document.querySelector("body");
const $sentence = document.querySelector("#sentence");
const $myHp = document.querySelector("#myHp");
const $enemyHp = document.querySelector("#enemyHp");
const $fightBtn = document.querySelector("#fightBtn");
const $runBtn = document.querySelector("#runBtn");
const $chooseBtn = document.querySelector("#choose");
const $skillBtn = document.querySelector("#skill");
const $skillStatus = document.querySelector("#skillStatus");
const $page1 = document.querySelector("#page1");
const $page2 = document.querySelector("#page2");
const $rangeInput = document.getElementById("rangeInput");
const $playBtn = document.getElementById("playBtn");

class Pokemon {
  constructor(hp, attackDmg) {
    this.hp = hp;
    this.attackDmg = attackDmg;
  }
}
const myPokemon = new Pokemon(20, 3);
const enemyPokemon = new Pokemon(20, 3);

$page2.style.display = "none";
$myHp.innerHTML = myPokemon.hp;
$enemyHp.innerHTML = enemyPokemon.hp;

function onClickFightBtn() {
  annyang.start();
  $chooseBtn.style.display = "none";
  $skillBtn.style.display = "flex";
}
function enemyAttack() {
  const enemySkills = ["몸통박치기", "바람일으키기", "전광석화", "모래뿌리기"];
  const random = Math.floor(Math.random() * 4);
  switch (enemySkills[random]) {
    case "몸통박치기":
      alert(
        `구구 의 몸통박치기!\n효과는 뛰어났다!\n${
          enemyPokemon.attackDmg * 1
        }의 데미지를 입었다!`
      );
      attacked(1);
      break;
    case "바람일으키기":
      alert(
        "구구 의 바람일으키기!\n효과는 뛰어났다!\n치코리타의 공격력이 1 감소했다!"
      );
      myPokemon.attackDmg -= 1;
      break;
    case "전광석화":
      alert(
        `구구 의 전광석화!\n효과는 뛰어났다!\n${
          enemyPokemon.attackDmg * 3
        }의 데미지를 입었다!`
      );
      attacked(3);
      break;
    case "모래뿌리기":
      alert(
        `구구 의 모래뿌리기!\n효과는 뛰어났다!\n${
          enemyPokemon.attackDmg * 2
        }의 데미지를 입었다!`
      );
      attacked(2);
      break;
  }
  $fightBtn.addEventListener("click", onClickFightBtn);
  $skillStatus.style.display = "none";
  $chooseBtn.style.display = "flex";
}
function turnEnd() {
  $skillStatus.style.display = "flex";
  $skillBtn.style.display = "none";
  $fightBtn.removeEventListener("click", onClickFightBtn);
  annyang.abort();
  setTimeout(enemyAttack, 3000);
}
function attack(damage) {
  enemyPokemon.hp -= myPokemon.attackDmg * damage;
  $enemyHp.innerHTML = enemyPokemon.hp;
  isDone();
}
function attacked(damage) {
  myPokemon.hp -= enemyPokemon.attackDmg * damage;
  $myHp.innerHTML = myPokemon.hp;
  isDone();
}
function isDone() {
  if (myPokemon.hp <= 0) {
    alert("전투에서 패배했습니다!");
    window.location.reload();
  }
  if (enemyPokemon.hp <= 0) {
    alert("전투에서 승리했습니다!\n축하해요😀");
    window.location.reload();
  }
}

$fightBtn.addEventListener("click", onClickFightBtn);
$runBtn.addEventListener("click", () => {
  window.location.reload();
});

//
// BGM SECTION
//
const audio = new Audio("./bgm.mp3");
audio.loop = true;
$playBtn.addEventListener("click", (e) => {
  audio.volume = 0.1;
  if (e.target.textContent === "Play") {
    audio.play();
    e.target.textContent = "Pause";
  } else {
    audio.pause();
    e.target.textContent = "Play";
  }
});
$rangeInput.addEventListener("input", (e) => {
  audio.volume = e.target.value;
});
