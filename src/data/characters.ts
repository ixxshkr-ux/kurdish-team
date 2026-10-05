import { Character, InfinityStone, ArenaLocation } from '../types/marvel';

export const MARVEL_CHARACTERS: Character[] = [
  {
    id: 'iron-man',
    name: 'Iron Man',
    kurdishName: 'ئایرۆن مان (پیاوی ئاسنین)',
    realName: 'Anthony Edward Stark',
    kurdishRealName: 'تۆنی ستایک',
    alias: 'The Armored Avenger',
    role: 'hero',
    affiliation: 'Avengers',
    accentColor: '#ec1d24',
    comicDebut: 'Tales of Suspense #39',
    yearDebut: 1963,
    creators: 'Stan Lee, Larry Lieber, Don Heck, Jack Kirby',
    bio: 'Genius billionaire playboy philanthropist Tony Stark created a high-tech suit of armor to escape captivity, ultimately becoming the mechanical heart and technological vanguard of the Avengers.',
    kurdishBio: 'تۆنی ستارک بازرگان و زانای بلیمەتە، دوای ئەوەی ڕفێندرا قەڵغانی پارێزەری دروستکرد و بوو بە یەکێک لە گەورەترین سەرکردەکانی تیمی تۆڵەسێنەران (ئەڤێنجەرز).',
    quote: "I am Iron Man.",
    kurdishQuote: "من پیاوی ئاسنینم.",
    portraitUrl: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&w=800&q=80',
    actionUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1000&q=80',
    powerGrid: {
      intelligence: 6,
      strength: 6,
      speed: 5,
      durability: 6,
      energyProjection: 6,
      fightingSkills: 4,
    },
    powers: [
      'Superhuman Strength via Exoskeleton',
      'Supersonic Flight & Thrusters',
      'Repulsor Beams & Chest Unibeam',
      'Nanotechnology Armor Morphing',
      'Satellite AI Uplink (F.R.I.D.A.Y.)'
    ],
    kurdishPowers: [
      'هێزی لەڕادەبەدەر بە هۆی جلوبەرگی نانۆوە',
      'فڕینی سەرووی دەنگ بە مووشەکی دەستی و پێ',
      'تیشکی ڕیپەلسەر و یۆنیبیمی سنگ',
      'سیستەمی هۆشی دەستکردی فرایدی'
    ],
    signatureMoves: ['Unibeam Overcharge', 'Micro-Missile Barrage', 'Nanotech Shield Parry', 'House Party Protocol'],
    kurdishSignatureMoves: ['تەقینەوەی یۆنیبیم', 'بارانی مووشەکی نانۆ', 'قەڵغانی نانۆتەکنەلۆژیا'],
    gear: ['Mark LXXXV Armor', 'Arc Reactor Core', 'Nano-Gauntlet', 'Repulsor Cannons'],
    kurdishGear: ['زرێی مارک 85', 'کۆری ئارک ڕیاکتەر', 'دەستکێشی نانۆ'],
    suits: [
      {
        id: 'mark-85',
        name: 'Mark LXXXV (Endgame)',
        kurdishName: 'مارک 85 (کۆتایی یاری)',
        imageUrl: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&w=800&q=80',
        description: 'Pinnacle nanotech armor designed to channel the raw energy of all six Infinity Stones.',
        kurdishDescription: 'پێشکەوتووترین زرێی نانۆ بۆ هەڵگرتنی بەردەکانی ئەبەدیەت.',
        year: '2019'
      },
      {
        id: 'hulkbuster',
        name: 'Mark XLIV Hulkbuster',
        kurdishName: 'هەڵک بەستەر',
        imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
        description: 'Heavy modular exo-frame built in collaboration with Bruce Banner to subdue the rampaging Hulk.',
        kurdishDescription: 'زرێی زەبەلاح بۆ ڕاگرتنی توڕەیی هەڵک.',
        year: '2015'
      }
    ],
    soundType: 'repulsor'
  },
  {
    id: 'spider-man',
    name: 'Spider-Man',
    kurdishName: 'سپایدەرمان (پیاوی جاڵجاڵۆکە)',
    realName: 'Peter Benjamin Parker',
    kurdishRealName: 'پیتەر پارکەر',
    alias: 'The Friendly Neighborhood Hero',
    role: 'hero',
    affiliation: 'Avengers',
    accentColor: '#3b82f6',
    comicDebut: 'Amazing Fantasy #15',
    yearDebut: 1962,
    creators: 'Stan Lee, Steve Ditko',
    bio: 'Bitten by a radioactive spider, Queens teenager Peter Parker learned the hard way that with great power comes great responsibility, becoming the world’s most selfless hero.',
    kurdishBio: 'پیتەر پارکەر دوای پێوەدانی لەلایەن جاڵجاڵۆکەیەکی تیشکدەرەوە، فێربوو کە هێزی گەورە لەگەڵ خۆیدا بەرپرسیارێتی گەورە دێنێت.',
    quote: "With great power comes great responsibility.",
    kurdishQuote: "لەگەڵ هێزی گەورەدا، بەرپرسیارێتیی گەورە دێت.",
    portraitUrl: 'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?auto=format&fit=crop&w=800&q=80',
    actionUrl: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&w=1000&q=80',
    powerGrid: {
      intelligence: 4,
      strength: 4,
      speed: 3,
      durability: 3,
      energyProjection: 1,
      fightingSkills: 4,
    },
    powers: [
      'Proportional Arachnid Strength & Agility',
      'Precognitive Spider-Sense Alert',
      'Wall-Crawling Electrostatic Cling',
      'Acrobatic Reflexes (40x Human)',
      'Synthetic Web Fluid Shooting'
    ],
    kurdishPowers: [
      'هەستی جاڵجاڵۆکەیی بۆ پێشبینیکردنی مەترسی',
      'توانای هەڵواسین و ڕاکردن بەسەر دیوارەکاندا',
      'تەقاندنی داوی دەستکردی بەهێز',
      'چابوکی و لەشجوانی لەڕادەبەدەر'
    ],
    signatureMoves: ['Web Blossom', 'Spider-Sense Counter', 'Slingshot Kick', 'Impact Webbing'],
    kurdishSignatureMoves: ['تۆڕی چوارلا', 'دژەهێرشی هەستی جاڵجاڵۆکە', 'شەقی کەوانەیی'],
    gear: ['Fluid Web-Shooters', 'Stark Integrated Suit', 'Spider-Tracers', 'Nano Iron Spider Legs'],
    kurdishGear: ['تەقێنەری تەونی جاڵجاڵۆکە', 'جلوبەرگی ئایرۆن سپایدەر'],
    suits: [
      {
        id: 'classic-spidey',
        name: 'Classic Red & Blue',
        kurdishName: 'کلاسیكی سوور و شین',
        imageUrl: 'https://images.unsplash.com/photo-1604200213928-ba3cf4fc8436?auto=format&fit=crop&w=800&q=80',
        description: 'The timeless hand-stitched suit with webbed cowl and dual mechanical web-shooters.',
        kurdishDescription: 'جلوبەرگە کلاسیكە ئەفسانەییەکەی پیتەر پارکەر.',
        year: '1962'
      },
      {
        id: 'iron-spider',
        name: 'Iron Spider Armor',
        kurdishName: 'ئایرۆن سپایدەر',
        imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
        description: 'Nanotech Stark battle suit featuring four deployable waldoes and life support.',
        kurdishDescription: 'جلوبەرگی نانۆی پێشکەوتوو بە چوار قاچی میکانیکی پۆڵایینەوە.',
        year: '2018'
      }
    ],
    soundType: 'thwip'
  },
  {
    id: 'thor',
    name: 'Thor Odinson',
    kurdishName: 'تۆر ئۆدینسۆن (خواوەندی هەورەبرووسکە)',
    realName: 'Thor Odinson',
    kurdishRealName: 'تۆر کوڕی ئۆدین',
    alias: 'The God of Thunder',
    role: 'hero',
    affiliation: 'Avengers',
    accentColor: '#38bdf8',
    comicDebut: 'Journey into Mystery #83',
    yearDebut: 1962,
    creators: 'Stan Lee, Larry Lieber, Jack Kirby',
    bio: 'Crown prince of Asgard and master of the storm, Thor channels raw cosmic lightning through divine uru weapons to defend Midgard and all Nine Realms.',
    kurdishBio: 'میراتگری تەختی ئاسگارد و خواوەندی هەورەبرووسکە، بە چەکووشی میۆلنیر و تەورەی ستۆرمبرێکەر هەورەکان کۆنتڕۆڵ دەکات.',
    quote: "Bring me Thanos!",
    kurdishQuote: "سانۆسم بۆ بێنن!",
    portraitUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    actionUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
    powerGrid: {
      intelligence: 2,
      strength: 7,
      speed: 6,
      durability: 6,
      energyProjection: 6,
      fightingSkills: 4,
    },
    powers: [
      'Divine Asgardian Physiology & Longevity',
      'Atmospheric & Weather Omnipresence',
      'Planetary Lightning Manipulation',
      'Flight via Mjolnir Momentum',
      'Bifrost Realm Teleportation'
    ],
    kurdishPowers: [
      'هێزی خودایی ئاسگاردی و نەمری',
      'بانگکردنی هەورەبرووسکە و ڕەشەبا',
      'فڕین بە یارمەتی میۆلنیر',
      'گواستنەوە بە پردی بایفرۆست'
    ],
    signatureMoves: ['God Blast', 'Mjolnir Boomerang Clang', 'Stormbreaker Decapitation', 'Lightning Tempest'],
    kurdishSignatureMoves: ['تەقینەوەی خودایی هەورەبرووسکە', 'فڕێدانی میۆلنیر', 'توفانی تۆر'],
    gear: ['Mjolnir (Enchanted Uru Hammer)', 'Stormbreaker Axe', 'Asgardian Battle Armor', 'Megingjörð Belt'],
    kurdishGear: ['چەکووشی میۆلنیر', 'تەوری ستۆرمبرێکەر', 'زرێی ئاسگارد'],
    suits: [
      {
        id: 'stormbreaker-thor',
        name: 'Stormbreaker King Thor',
        kurdishName: 'شای ئاسگارد بە ستۆرمبرێکەرەوە',
        imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
        description: 'Armed with the king-forged Stormbreaker, capable of summoning the Bifrost.',
        kurdishDescription: 'بە تەوری بەهێزی ستۆرمبرێکەر و هێزی تەواوی هەورەبرووسکەوە.',
        year: '2018'
      }
    ],
    soundType: 'thunder'
  },
  {
    id: 'captain-america',
    name: 'Captain America',
    kurdishName: 'کاپتن ئەمریکا',
    realName: 'Steven Grant Rogers',
    kurdishRealName: 'ستیڤ ڕۆجەرز',
    alias: 'The First Avenger',
    role: 'hero',
    affiliation: 'Avengers',
    accentColor: '#2563eb',
    comicDebut: 'Captain America Comics #1',
    yearDebut: 1941,
    creators: 'Joe Simon, Jack Kirby',
    bio: 'Enhanced by Dr. Erskine’s Super-Soldier Serum, Steve Rogers stood against tyranny in WWII, emerged from decades of ice, and became the moral compass and tactical commander of Earth’s heroes.',
    kurdishBio: 'ستیڤ ڕۆجەرز بە دەرمانی سەربازی باڵا بەهێزکرا، بووە ڕەمزی ئازادی و سەرکردەی تەواوی پاڵەوانەکانی سەر زەوی.',
    quote: "I can do this all day.",
    kurdishQuote: "دەتوانم تەواوی ڕۆژەکە ئەمە بکەم.",
    portraitUrl: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=800&q=80',
    actionUrl: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=1000&q=80',
    powerGrid: {
      intelligence: 3,
      strength: 3,
      speed: 2,
      durability: 3,
      energyProjection: 1,
      fightingSkills: 6,
    },
    powers: [
      'Peak Human Physical Conditioning',
      'Master Combat Tactician & Strategist',
      'Indomitable Willpower & Morale',
      'Advanced Vibranium Shield Kinetics',
      'Enhanced Healing Metabolism'
    ],
    kurdishPowers: [
      'لووتکەی هێز و لەشجوانی مرۆیی',
      'تاکتیکزانی شەڕ و سەرکردایەتی',
      'توانای بەکارهێنانی قەڵغانی ڤایبرەینیۆم',
      'ئیرادەی پۆڵایین'
    ],
    signatureMoves: ['Shield Ricochet Toss', 'Stars & Stripes Upper', 'Vibranium Absorption Slam', 'Worthy Hammer Slam'],
    kurdishSignatureMoves: ['فڕێدانی قەڵغان', 'لێدانی قەڵغانی ڤایبرەینیۆم'],
    gear: ['Proto-Adamantium / Vibranium Shield', 'Nomad Tactical Harness', 'Kevlar Weave Battle Suit'],
    kurdishGear: ['قەڵغانی ڤایبرەینیۆم', 'جلوبەرگی سەربازی'],
    suits: [
      {
        id: 'cap-classic',
        name: 'Scale Mail Avenger Suit',
        kurdishName: 'جلوبەرگی ئەڤێنجەرز',
        imageUrl: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=800&q=80',
        description: 'Iconic star-spangled uniform featuring reinforced scale-mail torso plating.',
        kurdishDescription: 'جلوبەرگی ئەستێرەدار بە قەڵغانی ناسراوەوە.',
        year: '1941'
      }
    ],
    soundType: 'shield'
  },
  {
    id: 'scarlet-witch',
    name: 'Scarlet Witch',
    kurdishName: 'سکاڕلێت ویچ (جادووگەری سوور)',
    realName: 'Wanda Maximoff',
    kurdishRealName: 'واندا ماکسیمۆف',
    alias: 'Harbinger of Chaos',
    role: 'antihero',
    affiliation: 'Avengers',
    accentColor: '#dc2626',
    comicDebut: 'The X-Men #4',
    yearDebut: 1964,
    creators: 'Stan Lee, Jack Kirby',
    bio: 'Born with innate probability alteration and amplified by the Mind Stone and the Darkhold, Wanda commands Chaos Magic capable of rewriting the fabric of reality itself.',
    kurdishBio: 'واندا ماکسیمۆف خاوەنی سیحری ئاژاوەیە (Chaos Magic)، توانای شێواندن و دروستکردنەوەی هەموو ڕاستییەکان و گەردوونەکانی هەیە.',
    quote: "You took everything from me.",
    kurdishQuote: "هەموو شتێکت لێ سەندمەوە.",
    portraitUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    actionUrl: 'https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=1000&q=80',
    powerGrid: {
      intelligence: 3,
      strength: 2,
      speed: 2,
      durability: 2,
      energyProjection: 6,
      fightingSkills: 3,
    },
    powers: [
      'Chaos Magic Reality Alteration',
      'Psionic Telekinesis & Force Fields',
      'Probability Manipulation (Hex Bolts)',
      'Telepathic Dreamwalking & Mind Incursion',
      'Matter Deconstruction'
    ],
    kurdishPowers: [
      'سیحری ئاژاوە و گۆڕینی ڕاستی',
      'تەلیپاتی و ڕاوەستاندنی مێشک',
      'جووڵاندنی تەبەقەی ماددەکان بە بێ دەست لێدان'
    ],
    signatureMoves: ['Reality Warp Hex', 'Telekinetic Crush', 'Darkhold Dreamwalk', 'Probability Blast'],
    kurdishSignatureMoves: ['شێواندنی ڕاستی', 'خردکردنی کێشی بە هێزی مێشک'],
    gear: ['Scarlet Tiara', 'The Darkhold Spellbook', 'Hex Runes'],
    kurdishGear: ['تاجی سوور', 'کتێبی تاریکی (دارکهۆڵد)'],
    suits: [
      {
        id: 'scarlet-tiara',
        name: 'Chaos Tiara Crown',
        kurdishName: 'تاجی ئاژاوە',
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
        description: 'Complete realization of the Scarlet Witch prophecy with mystic robes.',
        kurdishDescription: 'شێوەی تەواوی جادووگەری سوور.',
        year: '2021'
      }
    ],
    soundType: 'magic'
  },
  {
    id: 'doctor-strange',
    name: 'Doctor Strange',
    kurdishName: 'دکتۆر ستڕەینج',
    realName: 'Dr. Stephen Vincent Strange',
    kurdishRealName: 'ستیڤن ستڕەینج',
    alias: 'Master of the Mystic Arts',
    role: 'hero',
    affiliation: 'Multiverse',
    accentColor: '#f59e0b',
    comicDebut: 'Strange Tales #110',
    yearDebut: 1963,
    creators: 'Stan Lee, Steve Ditko',
    bio: 'Former arrogant neurosurgeon who sought healing in Kamar-Taj, Stephen Strange mastered interdimensional sorcery to safeguard reality against dark cosmic forces.',
    kurdishBio: 'نەشتەرگەری پێشووی مێشک، دوای ڕووداوێک فێری سحری فرەگەردوون بوو لە قەمەرتایج و بووە پارێزەری ڕەهەندەکانی گەردوون.',
    quote: "Dormammu, I've come to bargain.",
    kurdishQuote: "دۆرمامۆ، هاتووم ڕێککەوتنت لەگەڵ بکەم.",
    portraitUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    actionUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
    powerGrid: {
      intelligence: 4,
      strength: 2,
      speed: 2,
      durability: 2,
      energyProjection: 6,
      fightingSkills: 3,
    },
    powers: [
      'Mastery of Eldritch Magic & Glyphs',
      'Dimensional Portals via Sling Ring',
      'Astral Projection Beyond Physical Shell',
      'Time Manipulation via Eye of Agamotto',
      'Mirror Dimension Containment'
    ],
    kurdishPowers: [
      'سحری ئاڵتونی ئێڵدریچ',
      'کردنەوەی دەروازەی ڕەهەندەکان بە ئەڵقەی سلینگ',
      'جیاکردنەوەی ڕۆح لە جەستە',
      'کۆنتڕۆڵکردنی کات بە چاوی ئاگامۆتۆ'
    ],
    signatureMoves: ['Images of Ikonn', 'Crimson Bands of Cyttorak', 'Mirror Dimension Shift', 'Winds of Watoomb'],
    kurdishSignatureMoves: ['وێنەکانی ئیكۆن', 'شێواندنی ئاوێنەیی ڕەهەند'],
    gear: ['Cloak of Levitation', 'Eye of Agamotto', 'Sling Ring', 'Book of Vishanti'],
    kurdishGear: ['کۆتی فڕین', 'چاوی ئاگامۆتۆ', 'ئەڵقەی دەروازە'],
    suits: [
      {
        id: 'sorcerer-supreme',
        name: 'Kamar-Taj Robes',
        kurdishName: 'جلوبەرگی قەمەرتایج',
        imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
        description: 'Sorcerer tunic with the sentient Cloak of Levitation anchored across shoulders.',
        kurdishDescription: 'جلوبەرگی سحربازی باڵا.',
        year: '1963'
      }
    ],
    soundType: 'magic'
  },
  {
    id: 'wolverine',
    name: 'Wolverine',
    kurdishName: 'وۆڵڤەرین (لۆگان)',
    realName: 'James "Logan" Howlett',
    kurdishRealName: 'لۆگان',
    alias: 'Weapon X',
    role: 'antihero',
    affiliation: 'X-Men',
    accentColor: '#eab308',
    comicDebut: 'The Incredible Hulk #180',
    yearDebut: 1974,
    creators: 'Roy Thomas, Len Wein, John Romita Sr.',
    bio: 'Centuries-old mutant with a relentless accelerated healing factor, feral senses, and six retractable bone claws bonded with indestructible Adamantium metal.',
    kurdishBio: 'موتانتی کەنەدی بە هێزی چاکبوونەوەی خێرا و شەش پەنجەی ئادامانتیۆمی تیژ کە هەرگیز ناشکێن.',
    quote: "I'm the best there is at what I do, but what I do best isn't very nice.",
    kurdishQuote: "من باشترینم لەوەی کە دەیکەم، بەڵام ئەوەی دەیکەم زۆر خۆش نییە.",
    portraitUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    actionUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1000&q=80',
    powerGrid: {
      intelligence: 2,
      strength: 4,
      speed: 2,
      durability: 4,
      energyProjection: 1,
      fightingSkills: 4,
    },
    powers: [
      'Accelerated Cellular Healing Factor',
      'Indestructible Adamantium Skeleton & Claws',
      'Predatory Sensory Perception & Tracking',
      'Immunity to Toxins & Disease',
      'Berserker Rage Combat State'
    ],
    kurdishPowers: [
      'چاکبوونەوەی دەستبەجێی برینەکان',
      'ئێسک و چنگی ئادامانتیۆمی نەشکاو',
      'هەستی بۆنکردن و بیستنی دڕندانە',
      'بەرگری لە ژەهر و نەخۆشی'
    ],
    signatureMoves: ['Berserker Barrage', 'Tornado Claw', 'Adamantium Cross Slash', 'Feral Pounce'],
    kurdishSignatureMoves: ['هێرشی شێتانەی بێبەزەیی', 'لێدانی چنگی دڕندە'],
    gear: ['Adamantium Claws (6x)', 'X-Men Tactical Kevlar Uniform', 'Dog Tags'],
    kurdishGear: ['چنگەکانی ئادامانتیۆم', 'جلوبەرگی زرێپۆشی X-Men'],
    suits: [
      {
        id: 'classic-yellow-blue',
        name: 'Classic Yellow & Blue',
        kurdishName: 'زەرد و شینی کلاسیك',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
        description: 'The definitive masked comic uniform showcasing tiger-stripe ribbing.',
        kurdishDescription: 'جلوبەرگە ڕەسەنەکەی تیمی X-Men.',
        year: '1975'
      }
    ],
    soundType: 'punch'
  },
  {
    id: 'deadpool',
    name: 'Deadpool',
    kurdishName: 'دێدپوول',
    realName: 'Wade Winston Wilson',
    kurdishRealName: 'وەید ویڵسن',
    alias: 'The Merc with a Mouth',
    role: 'antihero',
    affiliation: 'X-Men',
    accentColor: '#ef4444',
    comicDebut: 'The New Mutants #98',
    yearDebut: 1991,
    creators: 'Fabian Nicieza, Rob Liefeld',
    bio: 'Unstable assassin with a hyperactive healing factor, expert marksmanship, twin katanas, and the supernatural awareness that he is inside a comic book / application.',
    kurdishBio: 'بکوژی بێوەستان بە چاکبوونەوەی لەڕادەبەدەر، قسەخۆش و شەرانگێز کە دەزانێت لەناو کۆمیک و یارییەکاندا بوونی هەیە!',
    quote: "Maximum effort!",
    kurdishQuote: "زۆرترین هەوڵدان!",
    portraitUrl: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=800&q=80',
    actionUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1000&q=80',
    powerGrid: {
      intelligence: 2,
      strength: 4,
      speed: 2,
      durability: 4,
      energyProjection: 1,
      fightingSkills: 6,
    },
    powers: [
      'God-tier Regenerative Healing Factor',
      'Master Swordsman & Marksman',
      'Fourth-Wall Breaking Omniscience',
      'Unpredictable Chaos Combat Flow',
      'Immunity to Psychic Telepathy'
    ],
    kurdishPowers: [
      'چاکبوونەوەی سەرسوڕهێنەری لەش',
      'شارەزای شمشێر و دەمانچە',
      'تێپەڕاندنی دیواری چوارەم',
      'شەڕی پێشبینی نەکراو'
    ],
    signatureMoves: ['Katana Copter', 'Chimichanga Grenade', 'Fourth-Wall Slam', 'Dual Pistol Spray'],
    kurdishSignatureMoves: ['خولانەوەی شمشێر', 'تەقینەوەی بۆمب', 'دەمانچەی دووانە'],
    gear: ['Dual Katanas (Bea & Arthur)', 'Custom Desert Eagles', 'Teleportation Belt', 'C4 Explosives'],
    kurdishGear: ['شمشێری دووانە', 'دەمانچەی بیابانی', 'قایشی گواستنەوە'],
    suits: [
      {
        id: 'red-leather',
        name: 'Crimson Leather Suit',
        kurdishName: 'جلوبەرگی چەرمی سوور',
        imageUrl: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=800&q=80',
        description: 'Reinforced red-and-black spandex suit with tactical harnesses and sword scabbards.',
        kurdishDescription: 'جلوبەرگە سوورە تایبەتەکەی دێدپوول.',
        year: '1991'
      }
    ],
    soundType: 'punch'
  },
  {
    id: 'thanos',
    name: 'Thanos',
    kurdishName: 'سانۆس (تایتانی شێت)',
    realName: 'Thanos of Titan',
    kurdishRealName: 'سانۆس',
    alias: 'The Mad Titan',
    role: 'villain',
    affiliation: 'Villains',
    accentColor: '#a855f7',
    comicDebut: 'The Invincible Iron Man #55',
    yearDebut: 1973,
    creators: 'Jim Starlin',
    bio: 'Born on Saturn’s moon Titan with the Deviant gene, Thanos is an interstellar conqueror obsessed with cosmic balance and the omnipotent power of the six Infinity Stones.',
    kurdishBio: 'زەبەلاحی تایتان و دەسەڵاتداری گەردوون کە هەوڵی هاوسەنگکردنی گەردوون دەدات بە بەدەستهێنانی هەر شەش بەردەکەی ئەبەدیەت.',
    quote: "I am inevitable.",
    kurdishQuote: "من چارەنووسم کە ڕێگری لێ ناکرێت.",
    portraitUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
    actionUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
    powerGrid: {
      intelligence: 6,
      strength: 7,
      speed: 7,
      durability: 6,
      energyProjection: 6,
      fightingSkills: 4,
    },
    powers: [
      'Titanic Godlike Strength & Durability',
      'Cosmic Energy Projection & Blasts',
      'Master Warlord Tactical Genius',
      'Double-Edged Titan Blade Mastery',
      'Omnipotent Reality Control (with Gauntlet)'
    ],
    kurdishPowers: [
      'هێزی لەڕادەبەدەری تایتانی بێ سنوور',
      'تەقینەوەی وزەی گەردوونی',
      'شارەزایی لە کەرەستەی شەڕ و ستراتیژ',
      'دەسەڵاتی ڕەها بە دەستکێشی ئەبەدیەت'
    ],
    signatureMoves: ['The Decimation Snap', 'Double-Blade Helicopter Cleave', 'Titan Choke Slam', 'Cosmic Energy Beam'],
    kurdishSignatureMoves: ['تەقاندنی پەنجەی ئەبەدیەت', 'شمشێری دوو سەرەی تایتان'],
    gear: ['Infinity Gauntlet (Uru Forged)', 'Double-Edged Titan Battle Sword', 'Titan Warlord Armor'],
    kurdishGear: ['دەستکێشی ئەبەدیەت', 'شمشێری گەورەی دوو سەرە', 'زرێی تایتان'],
    suits: [
      {
        id: 'infinity-warlord',
        name: 'Gold Warlord Armor',
        kurdishName: 'زرێی زێڕینی تایتان',
        imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
        description: 'Impenetrable golden warlord armor forged to withstand celestial-tier impacts.',
        kurdishDescription: 'زرێی شایانەی جەنگ لە کانزای زێڕین.',
        year: '1973'
      }
    ],
    soundType: 'cosmic'
  },
  {
    id: 'black-panther',
    name: 'Black Panther',
    kurdishName: 'بلاکی پانزەر (پڵنگی ڕەش)',
    realName: "T'Challa",
    kurdishRealName: 'تیچالا',
    alias: 'King of Wakanda',
    role: 'hero',
    affiliation: 'Avengers',
    accentColor: '#8b5cf6',
    comicDebut: 'Fantastic Four #52',
    yearDebut: 1966,
    creators: 'Stan Lee, Jack Kirby',
    bio: 'Monarch of the hidden, technologically supreme African kingdom of Wakanda, T’Challa wields ancestral spiritual wisdom and a suit woven from sound-absorbing Vibranium.',
    kurdishBio: 'پاشای وڵاتی پێشکەوتووی واکاندا، بە بەکارهێنانی زرێی پۆڵایینی ڤایبرەینیۆم و هێزی گیاکەی دڵ، پارێزگاری لە گەلەکەی دەکات.',
    quote: "Wakanda Forever!",
    kurdishQuote: "واکاندا بۆ هەمیشە!",
    portraitUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    actionUrl: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=1000&q=80',
    powerGrid: {
      intelligence: 5,
      strength: 3,
      speed: 2,
      durability: 3,
      energyProjection: 3,
      fightingSkills: 5,
    },
    powers: [
      'Heart-Shaped Herb Enhanced Senses',
      'Kinetic Energy Absorption & Redistribution',
      'Vibranium Micro-Weave Suit',
      'Vibranium Anti-Metal Claws',
      'Genius-Level Diplomatic & Tactical Mind'
    ],
    kurdishPowers: [
      'هێزی پێدراو لە گیای دڵ',
      'هەڵمژین و تەقاندنەوەی وزەی جووڵە',
      'زرێی چنراوی ڤایبرەینیۆم',
      'چنگی دژە کانزای ڤایبرەینیۆم'
    ],
    signatureMoves: ['Kinetic Shockwave Burst', 'Panther Pounce Strike', 'Vibranium Claw Swipe', 'Ancestral Rush'],
    kurdishSignatureMoves: ['تەقینەوەی شەپۆلی وزە', 'لێدانی چنگی پڵنگ'],
    gear: ['Vibranium Habit Suit', 'Kimoyo Beads', 'Energy Daggers', 'Ancestral Spear'],
    kurdishGear: ['زرێی ڤایبرەینیۆم', 'مۆری کیمۆیۆ', 'خەنجەری وزە'],
    suits: [
      {
        id: 'kinetic-habit',
        name: 'Kinetic Purple Weave',
        kurdishName: 'زرێی مۆری وزەدار',
        imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
        description: 'Shuri-engineered suit storing kinetic impacts and discharging them as radiant purple force waves.',
        kurdishDescription: 'زرێی تایبەت بۆ هەڵمژینی زەبر و لێدانەکان.',
        year: '2018'
      }
    ],
    soundType: 'shield'
  },
  {
    id: 'loki',
    name: 'Loki',
    kurdishName: 'لۆکی (خواوەندی چیرۆکەکان)',
    realName: 'Loki Laufeyson',
    kurdishRealName: 'لۆکی لاوفیسۆن',
    alias: 'God of Stories & Mischief',
    role: 'antihero',
    affiliation: 'Multiverse',
    accentColor: '#10b981',
    comicDebut: 'Journey into Mystery #85',
    yearDebut: 1962,
    creators: 'Stan Lee, Larry Lieber, Jack Kirby',
    bio: 'Adopted brother of Thor, Frost Giant descendant, and prince of Asgard who transcended his villainous past to become the God of Stories holding the Multiverse’s branches together.',
    kurdishBio: 'برای تۆر و پاشای یۆتنهایم، پاش ساڵانێک لە هەڵخەڵەتاندن گۆڕا بۆ خواوەندی چیرۆکەکان کە تەواوی دار و لقەکانی فرەگەردوون بەیەکەوە دەبەستێتەوە.',
    quote: "I know what kind of god I need to be. For you. For all of us.",
    kurdishQuote: "دەزانم پێویستە چ جۆرە خواوەندێک بم. بۆ ئێوە. بۆ هەموومان.",
    portraitUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    actionUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
    powerGrid: {
      intelligence: 5,
      strength: 5,
      speed: 3,
      durability: 6,
      energyProjection: 6,
      fightingSkills: 3,
    },
    powers: [
      'Master Illusion & Shape-Shifting',
      'Temporal Loom Weaving & Time Slipping',
      'Asgardian Frost Giant Physiology',
      'Astral Projection & Telepathy',
      'Eldritch Energy Bolts'
    ],
    kurdishPowers: [
      'فێڵ و دروستکردنی وێنەی هەڵخەڵەتێنەر',
      'کۆنتڕۆڵکردنی لقەکانی کات و کاتخزین',
      'هێزی زەبەلاحی بەفرین',
      'گۆڕینی ڕوخسار و جەستە'
    ],
    signatureMoves: ['Temporal Loom Bind', 'Illusion Clone Ambush', 'Dagger Flurry', 'Mind Scepter Charm'],
    kurdishSignatureMoves: ['بەستنەوەی لقی کات', 'فێڵی کۆپییەکان', 'لێدانی خەنجەری ژەهراوی'],
    gear: ['Horned Asgardian Crown', 'Chitauri Mind Scepter', 'Twin Throwing Daggers', 'Tesseract (Space Stone)'],
    kurdishGear: ['تاجی قۆچدار', 'عەسای مێشک', 'خەنجەرە دووانەکان'],
    suits: [
      {
        id: 'god-of-stories',
        name: 'God of Stories Robes',
        kurdishName: 'خواوەندی چیرۆکەکان',
        imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
        description: 'Ascended cosmic garments worn as Loki holds the timeline branches together at the Citadel.',
        kurdishDescription: 'جلوبەرگی ئەفسانەیی لۆکی لە کۆتایی کاتدا.',
        year: '2023'
      }
    ],
    soundType: 'magic'
  },
  {
    id: 'hulk',
    name: 'The Incredible Hulk',
    kurdishName: 'هەڵک (زەبەلاحی کەسک)',
    realName: 'Dr. Robert Bruce Banner',
    kurdishRealName: 'بروس بانەر',
    alias: 'The Green Goliath',
    role: 'hero',
    affiliation: 'Avengers',
    accentColor: '#22c55e',
    comicDebut: 'The Incredible Hulk #1',
    yearDebut: 1962,
    creators: 'Stan Lee, Jack Kirby',
    bio: 'Exposed to heavy doses of gamma radiation, soft-spoken physicist Bruce Banner transforms into a colossal green force of pure unbridled destruction when provoked.',
    kurdishBio: 'دوای ئەوەی بەر تیشکی گاما کەوت، زانا بروس بانەر لە کاتی توڕەبووندا دەگۆڕێت بۆ زەبەلاحێکی سەوزی بێ ڕاگرتن.',
    quote: "Hulk Smash!",
    kurdishQuote: "هەڵک دەشکێنێت و وێرانی دەکات!",
    portraitUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
    actionUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
    powerGrid: {
      intelligence: 6,
      strength: 7,
      speed: 3,
      durability: 7,
      energyProjection: 1,
      fightingSkills: 4,
    },
    powers: [
      'Limitless Strength Scaling with Anger',
      'Impenetrable Gamma-Reinforced Skin',
      'Supersonic Thunderclap Shockwave',
      'Colossal Sub-Orbital Leaping',
      'Rapid Regenerative Tissue'
    ],
    kurdishPowers: [
      'هێزی بێسنوور کە بە توڕەیی زیاد دەکات',
      'پێستی ئەستووری پارێزراو لە هەموو گوللەیەک',
      'چەپڵەی توند بۆ دروستکردنی باهۆزی دەنگ',
      'بازدانی چەندین کیلۆمەتر بە یەکجار'
    ],
    signatureMoves: ['Gamma Thunderclap', 'World-Breaker Stomp', 'Loki-Ragdoll Slam', 'Seismic Earthquake'],
    kurdishSignatureMoves: ['چەپڵەی هەورەبرووسکەیی گاما', 'شەقی وێرانکەری زەوی'],
    gear: ['Tattered Purple Trousers', 'Gamma Containment Bracer'],
    kurdishGear: ['پانتۆڵی مۆری دڕاو'],
    suits: [
      {
        id: 'savage-hulk',
        name: 'Savage Green Titan',
        kurdishName: 'هەڵکی دڕندە',
        imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
        description: 'Pure adrenaline and raw muscle fuel this unstoppable force of nature.',
        kurdishDescription: 'بەهێزترین و توندترین شێوەی هەڵک.',
        year: '1962'
      }
    ],
    soundType: 'punch'
  }
];

export const INFINITY_STONES: InfinityStone[] = [
  {
    id: 'space',
    name: 'Space Stone',
    kurdishName: 'بەردی بۆشایی (ڕەهەند)',
    colorHex: '#3b82f6',
    glowHex: 'rgba(59, 130, 246, 0.8)',
    relic: 'The Tesseract',
    kurdishRelic: 'تێسێراکت',
    ability: 'Instant teleportation across any corner of the cosmos and warping of spatial vectors.',
    kurdishAbility: 'گواستنەوەی دەستبەجێ بۆ هەر شوێنێکی گەردوون.',
    lore: 'Housed within the crystalline Tesseract cube, first brought to Midgard by Odin.',
    kurdishLore: 'لەنێو کوبی تێسێراکتدا شاردراوەتەوە کە لەلایەن ئۆدینەوە هێنرایە سەر زەوی.',
    soundKey: 'cosmic'
  },
  {
    id: 'mind',
    name: 'Mind Stone',
    kurdishName: 'بەردی مێشک',
    colorHex: '#eab308',
    glowHex: 'rgba(234, 179, 8, 0.8)',
    relic: 'Loki’s Scepter / Vision’s Forehead',
    kurdishRelic: 'عەسای لۆکی / نێوچاوانی ڤیژن',
    ability: 'Telepathy, universal intellect elevation, psionic blast generation, and sentience birth.',
    kurdishAbility: 'کۆنتڕۆڵکردنی مێشک و بیرکردنەوە و بەخشینی هۆش.',
    lore: 'Empowered Wanda and Pietro Maximoff, brought the Synthezoid Vision to sentient life.',
    kurdishLore: 'ژیانی بەخشییە ڤیژن و هێزی بەخشییە واندا ماکسیمۆف.',
    soundKey: 'magic'
  },
  {
    id: 'reality',
    name: 'Reality Stone',
    kurdishName: 'بەردی ڕاستی',
    colorHex: '#ef4444',
    glowHex: 'rgba(239, 68, 68, 0.8)',
    relic: 'The Aether',
    kurdishRelic: 'ئیسەر',
    ability: 'Reshapes physical laws, transforms matter into dark matter, bends truth into illusion.',
    kurdishAbility: 'گۆڕینی تەواوی یاساکانی فیزیا و بینین و ڕاستییەکان.',
    lore: 'A fluid crimson weapon coveted by Malekith the Accursed to plunge the realms into darkness.',
    kurdishLore: 'شلییەکی سووری وێرانکەر کە یاساکانی ماددە دەگۆڕێت.',
    soundKey: 'glitch'
  },
  {
    id: 'power',
    name: 'Power Stone',
    kurdishName: 'بەردی هێز',
    colorHex: '#a855f7',
    glowHex: 'rgba(168, 85, 247, 0.8)',
    relic: 'The Orb of Morag',
    kurdishRelic: 'گۆیی مۆراگ',
    ability: 'Cataclysmic energy capable of atomizing whole planets and multiplying other stones.',
    kurdishAbility: 'هێزی تەقاندنەوە و لەناوبردنی هەسارەکان بە یەک لێدان.',
    lore: 'Used by the Celestials to judge civilisations before being locked on ocean planet Morag.',
    kurdishLore: 'لەلایەن خوداوەندە گەردوونییەکانەوە بەکارهاتووە بۆ تێکشکاندنی جیهانەکان.',
    soundKey: 'punch'
  },
  {
    id: 'time',
    name: 'Time Stone',
    kurdishName: 'بەردی کات',
    colorHex: '#10b981',
    glowHex: 'rgba(16, 185, 129, 0.8)',
    relic: 'The Eye of Agamotto',
    kurdishRelic: 'چاوی ئاگامۆتۆ',
    ability: 'Rewinds, freezes, speeds up temporal streams, creates localized time loops.',
    kurdishAbility: 'گەڕاندنەوە، وەستاندن یان خێراکردنی کات و دروستکردنی سووڕی کات.',
    lore: 'Entrusted to Agamotto, the first Sorcerer Supreme, worn by Stephen Strange.',
    kurdishLore: 'بەردی پارێزراو لە ملی دکتۆر ستڕەینج بۆ پاراستنی هێڵی کات.',
    soundKey: 'thunder'
  },
  {
    id: 'soul',
    name: 'Soul Stone',
    kurdishName: 'بەردی ڕۆح',
    colorHex: '#f97316',
    glowHex: 'rgba(249, 115, 22, 0.8)',
    relic: 'The Altar of Vormir',
    kurdishRelic: 'شوێنی قوربانی لە ڤۆرمیر',
    ability: 'Commands the astral afterlife, accesses the Soul World, discerns truth from spirit.',
    kurdishAbility: 'دەسەڵات بەسەر ڕۆح و ژیان و جیهانی ڕۆحەکاندا.',
    lore: 'Guarded by the Red Skull on desolate Vormir, requiring a life in sacrifice.',
    kurdishLore: 'لە هەسارەی ڤۆرمیر پێویستی بە قوربانیدانی کەسێکی خۆشەویست هەیە.',
    soundKey: 'cosmic'
  }
];

export const ARENA_LOCATIONS: ArenaLocation[] = [
  {
    id: 'avengers-ruins',
    name: 'Avengers Compound Ruins',
    kurdishName: 'وێرانەی بارەگای ئەڤێنجەرز',
    environment: 'Smoking craters, shattered titanium girders, and rain of ash in Upstate New York.',
    kurdishEnvironment: 'زەمینی تێکشکاو و پڕ لە دووکەڵ دوای تەقینەوەی گەورە.',
    effect: '+15% Damage to Avenger and Titan combatants',
    kurdishEffect: 'زیادکردنی زیان بە ڕێژەی %15 بۆ تۆڵەسێنەران',
    bgGradient: 'from-amber-950 via-zinc-900 to-black',
    icon: 'Shield'
  },
  {
    id: 'wakanda-citadel',
    name: 'Wakandan Vibranium Citadel',
    kurdishName: 'قەڵای ڤایبرەینیۆمی واکاندا',
    environment: 'Lush golden hills overlooking the Great Mound with sonic defense towers active.',
    kurdishEnvironment: 'شاخ و قەڵای شاهانەی واکاندا بە دیواری پارێزەری وزەوە.',
    effect: '+20% Armor and Defense for Tech and Panther characters',
    kurdishEffect: 'زیادکردنی بەرگری بە ڕێژەی %20',
    bgGradient: 'from-purple-950 via-slate-900 to-black',
    icon: 'Crown'
  },
  {
    id: 'sakaar-arena',
    name: 'Grandmaster Contest of Champions Arena',
    kurdishName: 'گۆڕەپانی پاڵەوانەکانی ساکار',
    environment: 'Roaring crowds, neon scrap obelisks, and volatile junk portals above Sakaar.',
    kurdishEnvironment: 'گۆڕەپانی جەنگ بە هاندانی ملیۆنان بینەر.',
    effect: '+25% Critical Hit Chance on heavy melee strikes',
    kurdishEffect: 'زیادکردنی لێدانی کوشندە بۆ %25',
    bgGradient: 'from-red-950 via-stone-900 to-black',
    icon: 'Swords'
  },
  {
    id: 'bifrost-asgard',
    name: 'Bifrost Rainbow Bridge (Asgard)',
    kurdishName: 'پردی تیشکینی بایفرۆست لە ئاسگارد',
    environment: 'Cosmic prism bridge extending above churning celestial seas toward Heimdall’s dome.',
    kurdishEnvironment: 'پردی ئەفسانەیی ئاسگارد بەرەو دەروازەی نۆ جیهانەکە.',
    effect: '+20% Energy Damage for Cosmic and Mystical heroes',
    kurdishEffect: 'زیادکردنی وزەی هێرش بۆ خواوەندان',
    bgGradient: 'from-sky-950 via-indigo-950 to-black',
    icon: 'Zap'
  },
  {
    id: 'mirror-dimension',
    name: 'The Fractured Mirror Dimension',
    kurdishName: 'ڕەهەندی شێواوی ئاوێنەیی',
    environment: 'Folded geometric skyscrapers, inverted gravity vectors, and kaleidoscope fractals.',
    kurdishEnvironment: 'ڕەهەندێک کە یاسای کێشکردن و بیناکانی تێدا دەشێوێت.',
    effect: '+30% Magic and Reality Warping mastery',
    kurdishEffect: 'زیادبوونی هێزی سحری بە ڕێژەی %30',
    bgGradient: 'from-emerald-950 via-zinc-950 to-black',
    icon: 'Sparkles'
  }
];
