zapoc
=========

A zombie board game

Game
{
	name : "How I Met Your Mother",
	players : [Player],
	board: [RoomPosition],
	survivors : [Survivor],
}

Player
{
	name : "Q-Dawg",
	role : "ZOMBIE_MASTER",
	survior: [Survivor]
}

Survivor
{
	background : Background,
	energy : 2,
	health : 4,
	loot : [Loot],
	infection : [InfectionToken],
	bleeding : false,
}

Background
{
	name : "Mr. White",
	history : "Chemist",
	energy : 4,
	health : 4,
	loot : [Loot],
	special: "Mr. White gains +1 power when attacking special zombies."
}

Loot
{
	name : "Chainsaw",
	type : "CLOSE_WEAPON",
	size : "TWO_HANDS",
	power : 4,
	energy : 1,
	noisy : true,
	ammo : 3,
	special : [
		"Action+Energy+Ammo+Noisy: Break down adjacent door",
		"On miss: Holder, or adjacent survivor loses one health" 
	]
}

Role
{
	zombieMaster : "ZOMBIE_MASTER",
	survivor : "SURVIVOR"
}

InfectionToken
{
	geniune : true
}

LootType
{
	closeWeapon : "CLOSE_WEAPON",
	rangeWeapon : "RANGE_WEAPON",
	armour : "ARMOUR",
	consumable : "CONSUMABLE",
	bag : "BAG",
	tool : "TOOL"
}

LootSize
{
	oneHand : "ONE_HAND",
	twoHands : "TWO_HANDS",
	pocket : "POCKET",
	worn : "WORN"
}

RoomPosition
{
	row: 2,
	column: 5,
	room: Room
}

Room
{
	explored: true,
	loot: [Loot],
	looted: 2,
	effects: [RoomEffect],
	doorways: {Direction->Doorway},
	floorTiles: [5][5]
}

FloorTile
{
	canMoveThrough : true
	occupant : Survivor | Zombie
}

RoomEffect
{
	horrorShow : "HORROR_SHOW",
	dark : "DARK",
	fire : "FIRE"
}

Doorway
{
	door : Door,
	direction : Direction,
}

Door
{
	brokenDown : false,
	closed : false,
	toughness : 4
}

Direction
{
	north : "NORTH",
	south : "SOUTH",
	east : "EAST",
	west : "WEST"
}

Zombie
{
	name : "Walker",
	speed : 3,
	power : 1,
	toughness : 4,
	special : null
}


