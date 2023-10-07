// ==UserScript==
// @name         Auto UWP
// @version      1.0
// @description  Launch the UWP version of Roblox instead of the web version
// @author       Depso
// @match        https://*.roblox.com/*
// @match        https://roblox.com/*
// @icon         https://cdn.discordapp.com/avatars/1085827557410209832/a73faa8fc4865cbb14a5bb72f95d5e3d.webp?size=80
// @run-at       document-start
// ==/UserScript==

const Protocall = "roblox://experiences/start";

const FollowUserToExperience = function(userId) {
  window.location.href = `${Protocall}?userId=${userId}`;
};
const GameJoin = function(placeId) {
  window.location.href = `${Protocall}?placeId=${placeId}`;
};
const JoinGameServer = function(placeId, gameId) {
  window.location = `${Protocall}?placeId=${placeId}&gameInstanceId=${gameId}`;
};
const JoinPrivateGame = function(placeId, accessCode, linkCode) {
  window.location = `${Protocall}?placeId=${placeId}&accessCode=${accessCode}&linkCode=${linkCode}`;
};


(async () => {
  'use strict';

  while (typeof(Roblox) == "undefined" || typeof(Roblox.GameLauncher) == "undefined") {
      await new Promise(resolve => setTimeout(resolve))
  };

  Roblox.GameLauncher.joinMultiplayerGame = GameJoin;
  Roblox.GameLauncher.followPlayerIntoGame = FollowUserToExperience;
  Roblox.GameLauncher.joinGameInstance = JoinGameServer;
  Roblox.GameLauncher.joinPrivateGame = JoinPrivateGame;
})()
