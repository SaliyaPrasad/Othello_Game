
const LANGS = {
  ja: {
    title: 'オセロ',
    menuSubtitle: 'ゲームモードを選んでください',
    modeAITitle: 'AIと対戦',
    modeAIDesc: 'コンピュータと対戦します。難易度を選んでください。',
    modeLocalTitle: 'ローカル2人対戦',
    modeLocalDesc: '同じ端末で2人が交互にプレイします。',
    modeOnlineTitle: 'オンライン対戦',
    modeOnlineDesc: 'ルームコードを使って友達と対戦。',
    onlineMultiplayer: 'オンライン対戦',
    yourName: 'あなたの名前',
    enterName: '名前を入力…',
    createRoom: 'ルームを作成',
    createRoomDesc: 'ルームコードを生成して友達に共有してください。',
    createRoomBtn: 'ルームを作成',
    roomCodeLabel: 'ルームコード — 友達に共有',
    copyBtn: 'コピー',
    copiedBtn: 'コピー済み！',
    waitingOpponent: '対戦相手を待っています…',
    orDivider: 'または',
    joinRoom: 'ルームに参加',
    joinRoomDesc: '友達が共有したルームコードを入力してください。',
    enterCode: 'ルームコードを入力…',
    joinRoomBtn: '参加する',
    connecting: '接続中…',
    peerNote: 'オンラインプレイにはPeerJSを使用します。両プレイヤーはインターネット接続が必要です。',
    backToMenu: 'メニューに戻る',
    toggleHints: 'ヒントの切替',
    newGame: '新しいゲーム',
    difficulty: '難易度',
    easy: 'かんたん',
    medium: 'ふつう',
    hard: 'むずかしい',
    clickToStart: '新しいゲームをクリック',
    playAgain: 'もう一度',
    menu: 'メニュー',
    readyBtn: '準備完了！',
    playerDefault: 'プレイヤー',
    aiDefault: 'AI',
    youDefault: 'あなた',
    player1: 'プレイヤー1',
    player2: 'プレイヤー2',
    guestDefault: 'ゲスト',
    hostDefault: 'ホスト',
    opponentDefault: '相手',
    yourTurnClick: '⚫ あなたの番 — マスをクリック',
    aiThinking: '⚪ AIが考え中…',
    yourTurnMove: '⚫ あなたの番 — 手を選んでください',
    waitingFor: (name) => `⚪ ${name}の番を待っています…`,
    localTurn: (disc, name) => `${disc} ${name}の番`,
    aiNoMoves: '⚪ AIが打てません — もう一度あなたの番です！',
    youNoMoves: '⚫ あなたが打てません — AIが続けます！',
    gameOver: (n1, b, n2, w) => `ゲーム終了 · ${n1} ${b} – ${w} ${n2}`,
    winsTitle: (name) => `${name}の勝利！`,
    winsDesc: (name, a, b) => `${name}が${a}対${b}で勝利。よくできました！`,
    drawTitle: '引き分け！',
    drawDesc: (n) => `${n}対${n}で引き分け — 素晴らしい！`,
    noMovesYouAgain: '相手が打てません — あなたがもう一度！',
    passTo: (name) => `📱 ${name}に渡してください！`,
    passDesc: (name) => `${name}の番です — 端末を渡してください。`,
    connectedStarting: '<span class="dot-anim"></span> 接続完了！開始します…',
    waitingConnected: (code) => `<span class="dot-anim"></span> ${code}に接続中…`,
    opponentConnected: '<span class="dot-anim"></span> 相手が接続しました！開始します…',
    connError: (t) => `⚠️ 接続エラー: ${t}`,
    couldNotConnect: '⚠️ 接続できませんでした。コードを確認してください。',
    errType: (t) => `⚠️ エラー: ${t}`,
    badgeVsAI: 'VS AI',
    badgeLocal: 'LOCAL 2P',
    badgeOnline: 'ONLINE',
  },
  si: {
    title: 'ඔතෙල්ලෝ',
    menuSubtitle: 'ක්‍රීඩා ආකාරය තෝරන්න',
    modeAITitle: 'AI සමඟ',
    modeAIDesc: 'පරිගණකයට එරෙහිව ක්‍රීඩා කරන්න. අසාධාරණ මට්ටම තෝරන්න.',
    modeLocalTitle: 'දේශීය 2 ක්‍රීඩකයන්',
    modeLocalDesc: 'එකම උපාංගයේ දෙදෙනා වෙනස් වෙනස් ගන්නවා.',
    modeOnlineTitle: 'මාර්ගගත ක්‍රීඩාව',
    modeOnlineDesc: 'කාමර කේතයක් භාවිතා කර මිතුරෙකු සමඟ ක්‍රීඩා කරන්න.',
    onlineMultiplayer: 'මාර්ගගත ක්‍රීඩාව',
    yourName: 'ඔබේ නම',
    enterName: 'නම ඇතුළු කරන්න…',
    createRoom: 'කාමරයක් සාදන්න',
    createRoomDesc: 'කාමර කේතයක් සාදා ඔබේ මිතුරාට දෙන්න.',
    createRoomBtn: 'කාමරය සාදන්න',
    roomCodeLabel: 'කාමර කේතය — මිතුරාට බෙදාගන්න',
    copyBtn: 'පිටපත් කරන්න',
    copiedBtn: 'පිටපත් විය!',
    waitingOpponent: 'ප්‍රතිවාදියා බලාගෙන…',
    orDivider: 'හෝ',
    joinRoom: 'කාමරයට සම්බන්ධ වන්න',
    joinRoomDesc: 'ඔබේ මිතුරා බෙදාගත් කාමර කේතය ඇතුළු කරන්න.',
    enterCode: 'කාමර කේතය ඇතුළු කරන්න…',
    joinRoomBtn: 'සම්බන්ධ වන්න',
    connecting: 'සම්බන්ධ වෙමින්…',
    peerNote: 'මාර්ගගත ක්‍රීඩාව PeerJS භාවිතා කරයි. දෙකම ඉන්ටර්නෙට් අවශ්‍යයි.',
    backToMenu: 'මෙනුවට ආපසු',
    toggleHints: 'ඉඟි මාරු කරන්න',
    newGame: 'නව ක්‍රීඩාව',
    difficulty: 'දුෂ්කරතාව',
    easy: 'පහසු',
    medium: 'මධ්‍යම',
    hard: 'දුෂ්කර',
    clickToStart: 'නව ක්‍රීඩාව ක්ලික් කරන්න',
    playAgain: 'නැවත ක්‍රීඩා කරන්න',
    menu: 'මෙනු',
    readyBtn: 'සූදානම් — ඉදිරිය!',
    playerDefault: 'ක්‍රීඩකයා',
    aiDefault: 'AI',
    youDefault: 'ඔබ',
    player1: 'ක්‍රීඩකයා 1',
    player2: 'ක්‍රීඩකයා 2',
    guestDefault: 'අමුත්තා',
    hostDefault: 'ධාරකයා',
    opponentDefault: 'ප්‍රතිවාදියා',
    yourTurnClick: '⚫ ඔබේ වාරය — කොටුව ක්ලික් කරන්න',
    aiThinking: '⚪ AI සිතමින්…',
    yourTurnMove: '⚫ ඔබේ වාරය — ක්‍රීඩා කරන්න',
    waitingFor: (name) => `⚪ ${name} ගේ වාරය…`,
    localTurn: (disc, name) => `${disc} ${name} ගේ වාරය`,
    aiNoMoves: '⚪ AI ට ගෙවිය නොහැක — ඔබ නැවත ක්‍රීඩා කරන්න!',
    youNoMoves: '⚫ ඔබට ගෙවිය නොහැක — AI ක්‍රීඩා කරයි!',
    gameOver: (n1, b, n2, w) => `ක්‍රීඩාව අවසන් · ${n1} ${b} – ${w} ${n2}`,
    winsTitle: (name) => `${name} ජය ගත්තා!`,
    winsDesc: (name, a, b) => `${name} ${a}–${b} ගේ ජය. හොඳින් ක්‍රීඩා කළා!`,
    drawTitle: 'සමව!',
    drawDesc: (n) => `${n} බැගින් සමව — ශ්‍රේෂ්ඨයි!`,
    noMovesYouAgain: 'ප්‍රතිවාදියාට ගෙවිය නොහැක — ඔබ නැවත!',
    passTo: (name) => `📱 ${name} ට දෙන්න!`,
    passDesc: (name) => `${name} ගේ වාරය — උපාංගය දෙන්න.`,
    connectedStarting: '<span class="dot-anim"></span> සම්බන්ධ විය! ආරම්භ වෙමින්…',
    waitingConnected: (code) => `<span class="dot-anim"></span> ${code} සමඟ සම්බන්ධ වෙමින්…`,
    opponentConnected: '<span class="dot-anim"></span> ප්‍රතිවාදියා සම්බන්ධ විය! ආරම්භ වෙමින්…',
    connError: (t) => `⚠️ සම්බන්ධතා දෝෂය: ${t}`,
    couldNotConnect: '⚠️ සම්බන්ධ වීමට නොහැකි විය. කේතය පරීක්ෂා කරන්න.',
    errType: (t) => `⚠️ දෝෂය: ${t}`,
    badgeVsAI: 'VS AI',
    badgeLocal: 'දේශීය 2P',
    badgeOnline: 'මාර්ගගත',
  },
  en: {
    title: 'Othello',
    menuSubtitle: 'Choose your game mode to start playing',
    modeAITitle: 'vs AI',
    modeAIDesc: 'Play against the computer. Choose Easy, Medium, or Hard difficulty.',
    modeLocalTitle: 'Local 2-Player',
    modeLocalDesc: 'Two players take turns on the same device. Pass it along!',
    modeOnlineTitle: 'Online 2-Player',
    modeOnlineDesc: 'Play with a friend on two different devices using a room code.',
    onlineMultiplayer: 'Online Multiplayer',
    yourName: 'Your Name',
    enterName: 'Enter your name…',
    createRoom: 'Create a Room',
    createRoomDesc: 'Generate a room code and share it with your friend.',
    createRoomBtn: 'Create Room',
    roomCodeLabel: 'Room Code — Share with your friend',
    copyBtn: 'Copy',
    copiedBtn: 'Copied!',
    waitingOpponent: 'Waiting for opponent…',
    orDivider: 'or',
    joinRoom: 'Join a Room',
    joinRoomDesc: 'Enter the room code your friend shared with you.',
    enterCode: 'Enter room code…',
    joinRoomBtn: 'Join Room',
    connecting: 'Connecting…',
    peerNote: 'Online play uses PeerJS. Both players need an internet connection.',
    backToMenu: 'Back to menu',
    toggleHints: 'Toggle hints',
    newGame: 'New Game',
    difficulty: 'AI Difficulty',
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    clickToStart: 'Click New Game to start',
    playAgain: 'Play Again',
    menu: 'Menu',
    readyBtn: "I'm Ready — Let's Go!",
    playerDefault: 'Player',
    aiDefault: 'AI',
    youDefault: 'You',
    player1: 'Player 1',
    player2: 'Player 2',
    guestDefault: 'Guest',
    hostDefault: 'Host',
    opponentDefault: 'Opponent',
    yourTurnClick: '⚫ Your turn — click a square',
    aiThinking: '⚪ AI is thinking…',
    yourTurnMove: '⚫ Your turn — make a move',
    waitingFor: (name) => `⚪ Waiting for ${name}…`,
    localTurn: (disc, name) => `${disc} ${name}'s turn`,
    aiNoMoves: '⚪ AI has no moves — play again!',
    youNoMoves: '⚫ You have no valid moves — AI plays again!',
    gameOver: (n1, b, n2, w) => `Game over · ${n1} ${b} – ${w} ${n2}`,
    winsTitle: (name) => `${name} Wins!`,
    winsDesc: (name, a, b) => `${name} wins ${a}–${b}. Well played!`,
    drawTitle: "It's a Draw!",
    drawDesc: (n) => `Dead even at ${n} each — remarkable!`,
    noMovesYouAgain: 'No moves for the other player — you play again!',
    passTo: (name) => `📱 Pass to ${name}!`,
    passDesc: (name) => `${name}'s turn — hand over the device.`,
    connectedStarting: '<span class="dot-anim"></span> Connected! Starting…',
    waitingConnected: (code) => `<span class="dot-anim"></span> Connecting to room ${code}…`,
    opponentConnected: '<span class="dot-anim"></span> Opponent connected! Starting…',
    connError: (t) => `⚠️ Connection error: ${t}`,
    couldNotConnect: '⚠️ Could not connect. Check the code.',
    errType: (t) => `⚠️ Error: ${t}`,
    badgeVsAI: 'VS AI',
    badgeLocal: 'LOCAL 2P',
    badgeOnline: 'ONLINE',
  }
};

let currentLang = 'ja';
function t(key, ...args) {
  const val = LANGS[currentLang][key];
  if (typeof val === 'function') return val(...args);
  return val || LANGS['en'][key] || key;
}

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.body.className = `lang-${lang}`;

  // Update static data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });

  // Lang button active state
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  // Update player name defaults if they are still default values
  const p1 = document.getElementById('p1Name');
  const p2 = document.getElementById('p2Name');
  const defaultP1s = ['You', 'ඔබ', 'あなた', 'Player 1', 'ක්‍රීඩකයා 1', 'プレイヤー1'];
  const defaultP2s = ['AI', 'Player 2', 'ක්‍රීඩකයා 2', 'プレイヤー2'];
  if (gameMode === 'ai') {
    if (defaultP1s.includes(p1.value)) p1.value = t('youDefault');
    if (defaultP2s.includes(p2.value)) p2.value = t('aiDefault');
  } else if (gameMode === 'local') {
    if (defaultP1s.includes(p1.value)) p1.value = t('player1');
    if (defaultP2s.includes(p2.value)) p2.value = t('player2');
  }

  // Re-render dynamic UI text
  if (typeof updateUI === 'function') updateUI();
  document.title = `${t('title')} — Multiplayer`;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ============================================================
// CONSTANTS
// ============================================================
const DIRS=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
const BLACK=1,WHITE=2,EMPTY=0;
const WEIGHTS=[[100,-20,10,5,5,10,-20,100],[-20,-50,-2,-2,-2,-2,-50,-20],[10,-2,5,1,1,5,-2,10],[5,-2,1,0,0,1,-2,5],[5,-2,1,0,0,1,-2,5],[10,-2,5,1,1,5,-2,10],[-20,-50,-2,-2,-2,-2,-50,-20],[100,-20,10,5,5,10,-20,100]];

// ============================================================
// GAME STATE
// ============================================================
let board,currentPlayer,gameOver,aiDepth=1,showHints=true,aiThinking=false;
let gameMode='ai';
let onlineRole=null;
let peer=null, conn=null, onlineReady=false;
let waitingForPassConfirm=false;

// ============================================================
// DOM REFS
// ============================================================
const menuScreen=document.getElementById('menuScreen');
const onlineLobby=document.getElementById('onlineLobby');
const gameScreen=document.getElementById('gameScreen');
const boardEl=document.getElementById('board');
const blackCountEl=document.getElementById('blackCount');
const whiteCountEl=document.getElementById('whiteCount');
const statusMsg=document.getElementById('statusMsg');
const scoreBlack=document.getElementById('scoreBlack');
const scoreWhite=document.getElementById('scoreWhite');
const endModal=document.getElementById('endModal');
const passModal=document.getElementById('passModal');
const modeBadge=document.getElementById('modeBadge');
const diffSection=document.getElementById('diffSection');
const p1Name=document.getElementById('p1Name');
const p2Name=document.getElementById('p2Name');

// ============================================================
// NAVIGATION
// ============================================================
function showMenu(){
  menuScreen.style.display='flex';
  onlineLobby.classList.remove('active');
  gameScreen.classList.remove('active');
  endModal.classList.remove('visible');
  disconnectPeer();
}
function showGame(){
  menuScreen.style.display='none';
  onlineLobby.classList.remove('active');
  gameScreen.classList.add('active');
}
function showLobby(){
  menuScreen.style.display='none';
  onlineLobby.classList.add('active');
  gameScreen.classList.remove('active');
}

// ============================================================
// MENU HANDLERS
// ============================================================
document.getElementById('menuVsAI').addEventListener('click',()=>{
  gameMode='ai';
  modeBadge.textContent=t('badgeVsAI'); modeBadge.className='mode-badge vs-ai';
  diffSection.style.display='';
  p1Name.value=t('youDefault'); p2Name.value=t('aiDefault');
  p1Name.readOnly=false; p2Name.readOnly=true;
  showGame(); newGame();
});
document.getElementById('menuLocal').addEventListener('click',()=>{
  gameMode='local';
  modeBadge.textContent=t('badgeLocal'); modeBadge.className='mode-badge local';
  diffSection.style.display='none';
  p1Name.value=t('player1'); p2Name.value=t('player2');
  p1Name.readOnly=false; p2Name.readOnly=false;
  showGame(); newGame();
});
document.getElementById('menuOnline').addEventListener('click',()=>showLobby());
document.getElementById('lobbyBack').addEventListener('click',showMenu);
document.getElementById('backToMenu').addEventListener('click',showMenu);

// ============================================================
// GAME LOGIC
// ============================================================
function initBoard(){
  board=Array.from({length:8},()=>Array(8).fill(EMPTY));
  board[3][3]=WHITE;board[3][4]=BLACK;board[4][3]=BLACK;board[4][4]=WHITE;
  currentPlayer=BLACK;gameOver=false;aiThinking=false;waitingForPassConfirm=false;
}
function newGame(){
  initBoard();renderBoard();updateScore();updateUI();
  endModal.classList.remove('visible');passModal.classList.remove('visible');
}
function renderBoard(){
  const valid=getValidMoves(board,currentPlayer);
  boardEl.innerHTML='';
  const canClick=!gameOver&&!aiThinking&&!waitingForPassConfirm&&isMyTurn();
  for(let r=0;r<8;r++)for(let c=0;c<8;c++){
    const cell=document.createElement('div');
    cell.className='cell';cell.dataset.r=r;cell.dataset.c=c;
    const v=board[r][c];
    if(v!==EMPTY){
      const d=document.createElement('div');
      d.className='disc '+(v===BLACK?'black':'white');
      cell.appendChild(d);
    }else if(showHints&&!gameOver&&!waitingForPassConfirm&&canClick&&valid.some(([mr,mc])=>mr===r&&mc===c)){
      cell.classList.add('hint');
    }
    if(canClick)cell.addEventListener('click',onCellClick);
    boardEl.appendChild(cell);
  }
}
function isMyTurn(){
  if(gameMode==='ai') return currentPlayer===BLACK;
  if(gameMode==='local') return true;
  if(gameMode==='online') return (onlineRole==='host'&&currentPlayer===BLACK)||(onlineRole==='guest'&&currentPlayer===WHITE);
  return true;
}
function onCellClick(e){
  if(gameOver||aiThinking||waitingForPassConfirm||!isMyTurn())return;
  const r=+e.currentTarget.dataset.r,c=+e.currentTarget.dataset.c;
  const flips=getFlips(board,r,c,currentPlayer);
  if(!flips.length)return;
  applyMove(r,c,currentPlayer,flips,true);
}
function applyMove(r,c,player,flips,broadcast){
  makeMove(board,r,c,player);
  playSFX(player===BLACK?440:380,0.08,'sine');
  renderBoard();animateFlips(r,c,flips,player);
  updateScore();
  if(broadcast&&gameMode==='online'&&conn)conn.send({type:'move',r,c});
  if(gameMode==='local'){
    setTimeout(()=>checkNextTurnLocal(),flips.length*45+350);
  }else{
    nextTurn();
  }
}
function checkNextTurnLocal(){
  if(gameOver)return;
  const nextP=currentPlayer===BLACK?WHITE:BLACK;
  const myMoves=getValidMoves(board,nextP);
  const curMoves=getValidMoves(board,currentPlayer);
  if(!myMoves.length&&!curMoves.length){endGame();return;}
  if(!myMoves.length){
    showPassScreen(currentPlayer, t('noMovesYouAgain'));
  }else{
    currentPlayer=nextP;updateUI();
    showPassScreen(currentPlayer,null);
  }
}
function showPassScreen(player,msg){
  waitingForPassConfirm=true;
  const name=player===BLACK?p1Name.value:p2Name.value;
  document.getElementById('passTitle').textContent=t('passTo',name);
  document.getElementById('passDesc').textContent=msg||t('passDesc',name);
  passModal.classList.add('visible');
}
document.getElementById('passOkBtn').addEventListener('click',()=>{
  passModal.classList.remove('visible');
  waitingForPassConfirm=false;
  renderBoard();updateUI();
});
function getFlips(b,r,c,player){
  if(b[r][c]!==EMPTY)return[];
  const opp=player===BLACK?WHITE:BLACK,flips=[];
  for(const[dr,dc]of DIRS){
    const line=[];let nr=r+dr,nc=c+dc;
    while(nr>=0&&nr<8&&nc>=0&&nc<8&&b[nr][nc]===opp){line.push([nr,nc]);nr+=dr;nc+=dc;}
    if(line.length&&nr>=0&&nr<8&&nc>=0&&nc<8&&b[nr][nc]===player)flips.push(...line);
  }
  return flips;
}
function makeMove(b,r,c,player){
  const flips=getFlips(b,r,c,player);
  b[r][c]=player;for(const[fr,fc]of flips)b[fr][fc]=player;return flips;
}
function getValidMoves(b,player){
  const moves=[];
  for(let r=0;r<8;r++)for(let c=0;c<8;c++)if(getFlips(b,r,c,player).length)moves.push([r,c]);
  return moves;
}
function countDiscs(b){
  let black=0,white=0;
  for(let r=0;r<8;r++)for(let c=0;c<8;c++){if(b[r][c]===BLACK)black++;else if(b[r][c]===WHITE)white++;}
  return{black,white};
}
function nextTurn(){
  if(gameOver)return;
  const nextP=currentPlayer===BLACK?WHITE:BLACK;
  const myMoves=getValidMoves(board,nextP);
  if(myMoves.length){
    currentPlayer=nextP;updateUI();
    if(gameMode==='ai'&&currentPlayer===WHITE){
      setTimeout(doAI,500);
    }else if(gameMode==='ai'&&currentPlayer===BLACK){
      setTimeout(()=>renderBoard(),300);
    }
  }else{
    const origMoves=getValidMoves(board,currentPlayer);
    if(origMoves.length){
      updateUI();
      if(gameMode==='ai'){
        if(currentPlayer===BLACK){statusMsg.textContent=t('aiNoMoves');renderBoard();}
        else{statusMsg.textContent=t('youNoMoves');setTimeout(doAI,600);}
      }
    }else endGame();
  }
}
function updateUI(){
  const bActive=currentPlayer===BLACK&&!gameOver&&!waitingForPassConfirm;
  const wActive=currentPlayer===WHITE&&!gameOver&&!waitingForPassConfirm;
  scoreBlack.classList.toggle('active',bActive);
  scoreWhite.classList.toggle('active',wActive);
  if(!gameOver&&!aiThinking&&!waitingForPassConfirm){
    const name=currentPlayer===BLACK?p1Name.value:p2Name.value;
    if(gameMode==='local')statusMsg.textContent=t('localTurn',currentPlayer===BLACK?'⚫':'⚪',name);
    else if(gameMode==='online'){
      if(isMyTurn())statusMsg.textContent=t('yourTurnMove');
      else statusMsg.textContent=t('waitingFor',p2Name.value);
    }else statusMsg.textContent=currentPlayer===BLACK?t('yourTurnClick'):t('aiThinking');
  }
}
function updateScore(){
  const{black,white}=countDiscs(board);
  blackCountEl.textContent=black;whiteCountEl.textContent=white;
}
function animateFlips(r,c,flips,player){
  const cells=boardEl.querySelectorAll('.cell');
  const gc=(row,col)=>cells[row*8+col];
  const pd=gc(r,c).querySelector('.disc');
  if(pd){pd.classList.add('drop');setTimeout(()=>pd.classList.remove('drop'),300);}
  flips.forEach(([fr,fc],i)=>{
    setTimeout(()=>{
      const fd=gc(fr,fc).querySelector('.disc');
      if(fd){fd.classList.add('flip');setTimeout(()=>{fd.className='disc '+(player===BLACK?'black':'white');},140);}
    },i*45);
  });
}

// ============================================================
// AI
// ============================================================
function doAI(){
  if(gameOver)return;
  aiThinking=true;updateUI();renderBoard();
  setTimeout(()=>{
    const move=getBestMove(board,WHITE,aiDepth);
    if(move){
      const flips=getFlips(board,move[0],move[1],WHITE);
      makeMove(board,move[0],move[1],WHITE);
      playSFX(330,0.08,'sine');
      aiThinking=false;renderBoard();animateFlips(move[0],move[1],flips,WHITE);
      updateScore();nextTurn();
    }else{aiThinking=false;nextTurn();}
  },200);
}
function evalBoard(b,player){
  const opp=player===BLACK?WHITE:BLACK;let s=0;
  for(let r=0;r<8;r++)for(let c=0;c<8;c++){if(b[r][c]===player)s+=WEIGHTS[r][c];else if(b[r][c]===opp)s-=WEIGHTS[r][c];}
  s+=5*(getValidMoves(b,player).length-getValidMoves(b,opp).length);
  return s;
}
function minimax(b,depth,alpha,beta,max,player){
  const mover=max?player:(player===BLACK?WHITE:BLACK);
  const moves=getValidMoves(b,mover);
  if(!depth||!moves.length)return evalBoard(b,player);
  if(max){let best=-Infinity;for(const[r,c]of moves){const nb=b.map(r=>[...r]);makeMove(nb,r,c,mover);best=Math.max(best,minimax(nb,depth-1,alpha,beta,false,player));alpha=Math.max(alpha,best);if(beta<=alpha)break;}return best;}
  else{let best=Infinity;for(const[r,c]of moves){const nb=b.map(r=>[...r]);makeMove(nb,r,c,mover);best=Math.min(best,minimax(nb,depth-1,alpha,beta,true,player));beta=Math.min(beta,best);if(beta<=alpha)break;}return best;}
}
function getBestMove(b,player,depth){
  const moves=getValidMoves(b,player);if(!moves.length)return null;
  if(depth===1){
    const sc=moves.map(([r,c])=>{const nb=b.map(r=>[...r]);makeMove(nb,r,c,player);return{m:[r,c],s:evalBoard(nb,player)};}).sort((a,b)=>b.s-a.s);
    return sc[Math.floor(Math.random()*Math.min(3,sc.length))].m;
  }
  let best=-Infinity,bestMove=null;
  for(const[r,c]of moves){const nb=b.map(r=>[...r]);makeMove(nb,r,c,player);const score=minimax(nb,depth-1,-Infinity,Infinity,false,player);if(score>best){best=score;bestMove=[r,c];}}
  return bestMove;
}

// ============================================================
// END GAME
// ============================================================
function endGame(){
  gameOver=true;
  const{black,white}=countDiscs(board);
  const n1=p1Name.value||t('player1'), n2=p2Name.value||t('player2');
  document.getElementById('modalScore').innerHTML=
    `<div class="modal-score-item"><div class="score-disc disc-b" style="width:20px;height:20px;margin:0"></div><span>${black}</span></div>
     <div class="modal-score-item"><div class="score-disc disc-w" style="width:20px;height:20px;margin:0"></div><span>${white}</span></div>`;
  let icon,title,desc;
  if(black>white){icon='🎉';title=t('winsTitle',n1);desc=t('winsDesc',n1,black,white);}
  else if(white>black){icon='🏆';title=t('winsTitle',n2);desc=t('winsDesc',n2,white,black);}
  else{icon='🤝';title=t('drawTitle');desc=t('drawDesc',black);}
  document.getElementById('modalIcon').textContent=icon;
  document.getElementById('modalTitle').textContent=title;
  document.getElementById('modalDesc').textContent=desc;
  scoreBlack.classList.remove('active');scoreWhite.classList.remove('active');
  statusMsg.textContent=t('gameOver',n1,black,n2,white);
  renderBoard();
  setTimeout(()=>endModal.classList.add('visible'),450);
}

// ============================================================
// ONLINE (PeerJS)
// ============================================================
function generateCode(){return Math.random().toString(36).substring(2,8).toUpperCase();}
function disconnectPeer(){
  if(conn){try{conn.close();}catch(e){}}
  if(peer){try{peer.destroy();}catch(e){}}
  conn=null;peer=null;onlineReady=false;
}

document.getElementById('createRoomBtn').addEventListener('click',()=>{
  const name=document.getElementById('lobbyName').value.trim()||t('hostDefault');
  const code=generateCode();
  document.getElementById('roomCodeVal').textContent=code;
  document.getElementById('roomCodeArea').style.display='';
  document.getElementById('waitingPill').innerHTML=`<span class="dot-anim"></span> ${t('waitingOpponent')}`;
  disconnectPeer();
  peer=new Peer(code,{debug:0});
  peer.on('open',()=>{
    peer.on('connection',(c)=>{
      conn=c;
      conn.on('open',()=>{
        conn.send({type:'hello',name});
        document.getElementById('waitingPill').innerHTML=t('opponentConnected');
        setTimeout(()=>startOnlineGame('host',name,name),600);
      });
      conn.on('data',onOnlineData);
    });
  });
  peer.on('error',(e)=>{document.getElementById('waitingPill').innerHTML=t('connError',e.type);});
});
document.getElementById('copyCodeBtn').addEventListener('click',()=>{
  const code=document.getElementById('roomCodeVal').textContent;
  navigator.clipboard.writeText(code).catch(()=>{});
  document.getElementById('copyCodeBtn').textContent=t('copiedBtn');
  setTimeout(()=>document.getElementById('copyCodeBtn').textContent=t('copyBtn'),2000);
});
document.getElementById('joinRoomBtn').addEventListener('click',()=>{
  const code=document.getElementById('joinCodeInput').value.trim().toUpperCase();
  if(code.length<4)return;
  const name=document.getElementById('lobbyName').value.trim()||t('guestDefault');
  document.getElementById('joinStatus').style.display='';
  document.getElementById('joinPill').innerHTML=t('waitingConnected',code);
  disconnectPeer();
  peer=new Peer(undefined,{debug:0});
  peer.on('open',()=>{
    conn=peer.connect(code);
    conn.on('open',()=>{
      conn.send({type:'hello',name});
      document.getElementById('joinPill').innerHTML=t('connectedStarting');
      setTimeout(()=>startOnlineGame('guest',name,name),600);
    });
    conn.on('data',onOnlineData);
    conn.on('error',()=>{document.getElementById('joinPill').innerHTML=t('couldNotConnect');});
  });
  peer.on('error',(e)=>{document.getElementById('joinPill').innerHTML=t('errType',e.type);});
});

let opponentName=null;
function startOnlineGame(role,myName,oppNameHint){
  onlineRole=role;
  gameMode='online';
  modeBadge.textContent=t('badgeOnline'); modeBadge.className='mode-badge online';
  diffSection.style.display='none';
  const oppName=opponentName||t('opponentDefault');
  if(role==='host'){p1Name.value=myName||t('youDefault');p2Name.value=oppName;}
  else{p1Name.value=oppName;p2Name.value=myName||t('youDefault');}
  p1Name.readOnly=true;p2Name.readOnly=true;
  showGame();newGame();
}
function onOnlineData(data){
  if(data.type==='hello'){
    opponentName=data.name||t('opponentDefault');
    if(onlineRole==='host')p2Name.value=opponentName;
    else p1Name.value=opponentName;
    return;
  }
  if(data.type==='move'){
    const{r,c}=data;
    const flips=getFlips(board,r,c,currentPlayer);
    if(!flips.length)return;
    makeMove(board,r,c,currentPlayer);
    playSFX(currentPlayer===BLACK?440:380,0.08,'sine');
    renderBoard();animateFlips(r,c,flips,currentPlayer);
    updateScore();nextTurn();
  }
  if(data.type==='newgame')newGame();
}

// ============================================================
// UI EVENTS
// ============================================================
document.getElementById('newGameBtn').addEventListener('click',()=>{
  newGame();
  if(gameMode==='online'&&conn)conn.send({type:'newgame'});
});
document.getElementById('startBtn').addEventListener('click',()=>{
  newGame();
  if(gameMode==='online'&&conn)conn.send({type:'newgame'});
});
document.getElementById('modalPlayAgain').addEventListener('click',()=>{
  endModal.classList.remove('visible');
  newGame();
  if(gameMode==='online'&&conn)conn.send({type:'newgame'});
});
document.getElementById('modalMenu').addEventListener('click',()=>{endModal.classList.remove('visible');showMenu();});
document.getElementById('hintToggle').addEventListener('click',()=>{
  showHints=!showHints;
  document.getElementById('hintToggle').classList.toggle('active',showHints);
  renderBoard();
});
document.querySelectorAll('.diff-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.diff-btn').forEach(b=>b.classList.remove('selected'));
    btn.classList.add('selected');
    aiDepth=+btn.dataset.diff;
    newGame();
  });
});

// ============================================================
// AUDIO
// ============================================================
let audioCtx;
function getAC(){if(!audioCtx)try{audioCtx=new AudioContext();}catch(e){}return audioCtx;}
function playSFX(freq,dur,type){
  const ctx=getAC();if(!ctx)return;
  ctx.resume().then(()=>{
    const o=ctx.createOscillator(),g=ctx.createGain();
    o.type=type||'sine';o.frequency.value=freq;
    g.gain.setValueAtTime(0.12,ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+dur);
    o.connect(g).connect(ctx.destination);o.start();o.stop(ctx.currentTime+dur);
  });
}

// Start with Japanese as default
applyLang('ja');
showMenu();
