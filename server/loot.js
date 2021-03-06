var lootCards = [
  {
    name : "Bow",
    type : RANGE_WEAPON,
    slot : TWO_HANDS,
    power : 2,
    energy : 1,
    ammo : "D+3",
    noise : false,
    special : []
  },
  {
    name : "Revolver",
    type : RANGE_WEAPON,
    slot : ONE_HAND,
    power : 3,
    energy : 0,
    ammo : "D+1",
    noisy : true,
    special : []
  },
  {
    name : "Fireworks",
    type : RANGE_WEAPON,
    slot : TWO_HANDS,
    power : 3,
    energy : 1,
    ammo : 1,
    noisy : true,
    special : ["Hits all targets in target room."]
  },
  {
    name : "Nail Gun",
    type : RANGE_WEAPON,
    slot : ONE_HAND,
    power : 1,
    energy : 0,
    ammo : "D+8",
    noisy : true,
    special : []
  },
  {
    name : "Rifle",
    type : RANGE_WEAPON,
    slot : TWO_HANDS,
    power : 3,
    energy : 0,
    ammo : "D+3",
    noisy : true,
    special : []
  },
  {
    name : "Crossbow",
    type : RANGE_WEAPON,
    slot : TWO_HANDS,
    power : 3,
    energy : 0,
    ammo : "D+3",
    noisy : false,
    special : ["Action+Energy: Reload crossbow."]
  },
  {
    name : "Molotov Cocktail",
    type : RANGE_WEAPON,
    slot : ONE_HAND,
    power : 2,
    energy : 1,
    ammo : 1,
    noisy : true,
    special : ["Hits all targets in target room.  Lights target room on fire."]
  },
  {
    name : "Pistol",
    type : RANGE_WEAPON,
    slot : ONE_HAND,
    power : 2,
    energy : 0,
    ammo : D+3,
    noisy : true,
    special : ["+1 power if other hand is empty."]
  },
  {
    name : "Shotgun",
    type : RANGE_WEAPON,
    slot : TWO_HANDS,
    power : 4,
    energy : 0,
    ammo : D+1,
    noisy : true,
    special : ["On miss, target is knocked backwards one square."]
  },
  {
    name : "Sledge Hammer",
    type : CLOSE_WEAPON,
    slot : TWO_HANDS,
    power : 3,
    energy : 2,
    noisy : false,
    special : ["On miss, target is knocked backwards one square."]
  },
  {
    name : "Guitar",
    type : CLOSE_WEAPON,
    slot : TWO_HANDS,
    power : 2,
    energy : 1,
    noisy : true,
    special : ["Action+Noisy: Move target zombie [D] towards you.", "Discard after using as weapon."]
  },
  {
    name : "Sharpened Crutch",
    type : CLOSE_WEAPON,
    slot : TWO_HANDS,
    power : 2,
    energy : 1,
    noisy : false,
    special : ["On miss, discard.", "May attack targets one square away."]
  },
  {
    name : "Crowbar",
    type : CLOSE_WEAPON,
    slot : ONE_HAND,
    power : 2,
    energy : 1,
    noisy : false,
    special : ["Action+Energy+Noisy: Breakdown adjacent door."]
  },
  {
    name : "Fire Extinguisher",
    type : CLOSE_WEAPON,
    slot : TWO_HANDS,
    power : 2,
    energy : 2,
    noisy : false,
    special : ["Action+Noisy+Discard: Target adjacent room is no longer on fire."]
  },
  {
    name : "Fireaxe",
    type : CLOSE_WEAPON,
    slot : TWO_HANDS,
    power : 3,
    energy : 1,
    noisy : false,
    special : ["Action+Noisy+Energy: Break down target adjacent door."]
  },
  {
    name : "Pitchfork",
    type : CLOSE_WEAPON,
    slot : TWO_HANDS,
    power : 2,
    energy : 1,
    noisy : false,
    special : ["On miss, target is knocked backwards one square.", "May attack targets one square away."]
  },
  {
    name : "Knife",
    type : CLOSE_WEAPON,
    slot : ONE_HAND,
    power : 1,
    energy : 1,
    noisy : false,
    special : ["Increases the power of any close weapon held in the other hand by 1."]
  },
  {
    name : "Machete",
    type : CLOSE_WEAPON,
    slot : ONE_HAND,
    power : 2,
    energy : 1,
    noisy : false,
    special : [""]
  },
  {
    name : "Circular Saw",
    type : CLOSE_WEAPON,
    slot : ONE_HAND,
    power : 3,
    energy : 1,
    ammo : "D+2",
    noisy : true,
    special : ["On miss, holder or an adjacent survivor loses one health.","Action+Energy+Ammo: Break down target adjacent door."]
  },
  {
    name : "Chainsaw",
    type : CLOSE_WEAPON,
    slot : TWO_HANDS,
    power : 4,
    energy : 1,
    ammo : "D+2",
    noisy : true,
    special : ["On miss, holder or an adjacent survivor loses one health.","Action+Energy+Ammo: Break down target adjacent door."]
  },
  {
    name : "Katana",
    type : CLOSE_WEAPON,
    slot : TWO_HANDS,
    power : 4,
    energy : 1,
    noisy : false,
    special : ["On miss, drop katana."]
  },
  {
    name : "Submachine Gun",
    type : RANGE_WEAPON,
    slot : TWO_HANDS,
    power : 2,
    energy : 0,
    noisy : true,
    special : ["On miss, Ammo+Ammo: Fire again."]
  },
  {
    name : "Aluminium Bat",
    type : CLOSE_WEAPON,
    slot : ONE_HAND,
    power : 2,
    energy : 1,
    noisy : false,
    special : ["+1 power if other hand is empty."]
  },
  {
    name : "Energy Drink",
    type : CONSUMABLE,
    slot : POCKET,
    special : ["Action+Discard: Regain 3 energy."]
  },
  {
    name : "Adrenaline Shot",
    type : CONSUMABLE,
    slot : POCKET,
    special : ["Action+Discard+Health: Regain all lost energy."]
  },
  {
    name : "Morphine",
    type : CONSUMABLE,
    slot : POCKET,
    special : ["Action+Discard: Recover all lost health."]
  },
  {
    name : "Bandage",
    type : CONSUMABLE,
    slot : POCKET,
    special : ["Action+Discard: Remove bleed from self or adjacent survivor."]
  },
  {
    name : "Lunch Box",
    type : CONSUMABLE,
    slot : ONE_HAND,
    special : ["Action+Discard: Regain 3 energy and 1 health."]
  },
  {
    name : "First Aid Kit",
    type : CONSUMABLE,
    slot : ONE_HAND,
    special : ["Action: Remove bleed or infection token or recover 1 health.  Roll D: 1-3 discard kit; 4-6 retain kit."]
  },
  {
    name : "Vodka",
    type : CONSUMABLE,
    slot : ONE_HAND,
    special : ["Action+Discard: Remove 2 infection tokens."]
  },
  {
    name : "Magic Mushrooms",
    type : CONSUMABLE,
    slot : POCKET,
    special : ["Action+Discard: Regain 3 energy."]
  },
  {
    name : "Amphetamines",
    type : CONSUMABLE,
    slot : POCKET,
    special : ["Action+Discard: Increase walk distance by 2 until end of turn."]
  },
  {
    name : "Jerky",
    type : CONSUMABLE,
    slot : POCKET,
    special : ["Action+Discard: Recover 1 health."]
  },
  {
    name : "Leather Jacket",
    type : ARMOUR,
    slot : WORN,
    special : ["Once per turn, when harmed by an attack, Energy: do not lose health."]
  },
  {
    name : "Riot Shield",
    type : ARMOUR,
    slot : ONE_HAND,
    special : ["Once per attack, Energy: Attacker rerolls one D of your choice."]
  },
  {
    name : "Apron",
    type : ARMOUR,
    slot : WORN,
    special : ["Holds 2 Hands of items.","Discard: Ignore a close attack."]
  },
  {
    name : "Fire-Proof Suit",
    type : ARMOUR,
    slot : WORN,
    special : ["Unaffected by fire.","Discard: Ignore a close attack."]
  },
  {
    name : "Backpack",
    type : BAG,
    slot : WORN,
    special : ["Holds 5 Hands of items."]
  },
  {
    name : "Holster",
    type : BAG,
    slot : POCKET,
    special : ["Holds 1 Hand of items.", "Contents may be moved to/from hand for free."]
  },
  {
    name : "Gym Bag",
    type : BAG,
    slot : ONE_HAND,
    special : ["Holds 5 Hands of items."]
  },
  {
    name : "Flash Light",
    type : TOOL,
    slot : ONE_HAND,
    ammo : "D",
    special : ["Ammo: Ignore effects of darkness until end of turn."]
  },
  {
    name : "Cleaver",
    type : CLOSE_WEAPON,
    slot : ONE_HAND,
    power : 2,
    energy : 1,
    special : [""]
  }
];
