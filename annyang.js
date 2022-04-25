const commands = {
  "가라 몸통박치기": () => {
    const random = Math.floor(Math.random() * 4);
    if (random < 3) {
      // 75%
      alert(
        `치코리타의 몸통박치기!\n효과는 뛰어났다!\n${
          myPokemon.attackDmg * 1
        } 의 데미지를 입혔다!`
      );
      attack(1);
      turnEnd();
    } else {
      alert("치코리타의 몸통박치기!\n효과는 미미했다...");
      turnEnd();
    }
  },
  울어라: () => {
    const random = Math.floor(Math.random() * 2);
    if (random < 1) {
      // 50%
      alert(
        `치코리타의 울음소리!\n효과는 뛰어났다!\n구구 의 공격력이 1 감소했다!`
      );
      enemyPokemon.attackDmg -= 1;
      turnEnd();
    } else {
      alert("치코리타의 울음소리!\n효과는 미미했다...");
      turnEnd();
    }
  },
  "죽어라 솔라빔": () => {
    const random = Math.floor(Math.random() * 4);
    if (random < 1) {
      // 25%
      alert(
        `치코리타의 솔라빔!\n효과는 뛰어났다!\n${
          myPokemon.attackDmg * 3
        } 의 데미지를 입혔다!`
      );
      attack(3);
      turnEnd();
    } else {
      alert("치코리타의 솔라빔!\n효과는 미미했다...");
      turnEnd();
    }
  },
  누르기: () => {
    const random = Math.floor(Math.random() * 2);
    if (random < 1) {
      // 50%
      alert(
        `치코리타의 누르기!\n효과는 뛰어났다!\n${
          myPokemon.attackDmg * 2
        } 의 데미지를 입혔다!`
      );
      attack(2);
      turnEnd();
    } else {
      alert("치코리타의 누르기!\n효과는 미미했다...");
      turnEnd();
    }
  },
  입장: () => {
    $page1.style.display = "none";
    $page2.style.display = "block";
    annyang.abort();
  },
};
if (annyang) {
  annyang.addCommands(commands);
  annyang.setLanguage("ko");
  annyang.start();
}
