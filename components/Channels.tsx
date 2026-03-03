
import React, { useState } from 'react';

interface ChannelCategory {
  name: string;
  icon: string;
  channels: string[];
}

const CHANNEL_CATEGORIES: ChannelCategory[] = [
  // === FEATURED CATEGORIES ===
  {
    name: "Sport",
    icon: "⚽",
    channels: [
     "Arena Sport 1", "Arena Sport 1 FHD", "Arena Sport 1 HD", "Arena Sport 2", "Arena Sport 2 FHD", "Arena Sport 2 HD", "Arena Sport 3", "Arena Sport 3 FHD", "Arena Sport 3 HD", "Bein Sports 1 FHD", "Bein Sports 1 HD", "Bein Sports 2 FHD", "Bein Sports 2 HD", "Bein Sports 3 FHD", "Bein Sports 3 HD", "Bein Sports 4 FHD", "Bein Sports 4 HD", "Bein Sports 5 FHD", "Bein Sports 5 HD", "Bein Sports 11 FHD", "Bein Sports 11 HD", "Bein Sports 12 FHD", "Bein Sports 12 HD", "Bein Sports 13 HD", "BT ESPN HD", "BT Sport 1 FHD", "BT Sport 1 HD", "BT Sport 2 FHD", "BT Sport 2 HD", "BT Sport 3 FHD", "BT Sport 3 HD", "BT Sport ESPN", "BT Sport ESPN FHD", "BT Sport ESPN HD", "BT Sport Extra 1 HD", "BT Sport Extra 2 HD", "BT Sport Extra 3 HD", "BT Sport Extra 4 FHD", "BT Sport Extra 4 HD", "BT Sport Extra 5 HD", "BT Sport Mosaic 2", "BT Sport Xtra 5 FHD", "Calcio 5", "Canal+ Sport 2 FHD", "Canal+ Sport 3 FHD", "Canal+ Sport 4 FHD", "Canal+ Sport FHD", "Canal+ Sport Fi HD", "DAZN", "DAZN 1", "DAZN 1 Bar HD", "DAZN 1 FHD", "DAZN 1 HD", "DAZN 2 Bar HD", "DAZN 2 FHD", "DAZN 2 HD", "DAZN Bar 1 FHD", "DAZN Bar 2 FHD", "DAZN Extra 1", "DAZN Extra 2", "DAZN Extra 3", "DAZN Extra 4", "DAZN Extra 5", "DAZN Extra 6", "Digi Sport 1 FHD", "Digi Sport 1 HD", "Digi Sport 2 FHD", "Digi Sport 2 HD", "Digi Sport 3 FHD", "Digi Sport 3 HD", "Digi Sport 4 FHD", "Digi Sport 4 HD", "Eleven Sports 1 FHD", "Eleven Sports 2 FHD", "Eleven Sports 3 FHD", "Eleven Sports 4 FHD", "Eleven Sports 5 FHD", "Eleven Sports 6 FHD", "ESPN", "ESPN 1", "ESPN 1 FHD", "ESPN 1 HD", "ESPN 2", "ESPN 2 FHD", "ESPN 2 HD", "ESPN 2 Sur HD", "ESPN 3", "ESPN 3 HD", "ESPN 3 Sur HD", "ESPN Brasil HD", "ESPN Deportes", "ESPN Deportes FHD", "ESPN Extra FHD", "ESPN FHD", "ESPN Futbol HD", "ESPN HD", "ESPN Internacional HD", "ESPN Network", "ESPN News HD", "ESPN Plus", "ESPN Plus HD", "ESPN SEC Network HD", "ESPN U HD", "ESPN USA FHD", "ESPN+", "Eurosport", "Eurosport 1 FHD", "Eurosport 1 HD", "Eurosport 2", "Eurosport 2 Extra", "Eurosport 2 Extra FHD", "Eurosport 2 FHD", "Eurosport 2 HD", "Eurosport 2 Xtra HD", "Eurosport FHD", "Eurosport HD", "Eurosport N HD", "Eurosport News FHD", "Eurosport Pluss 1", "Eurosport Pluss 2 HD", "Eurosport Xtra 2 HD", "Fight Box FHD", "Fight Box HD", "Myhd Fight Box HD", "Myhd Trace Sport", "Nova Sport", "Nova Sport 1 HD", "Nova Sport 2 HD", "Nova Sport 5 HD", "Nova Sport FHD", "Nova Sport HD", "Nova Sports 1 FHD", "Nova Sports 2 HD", "Nova Sports 3 HD", "Nova Sports 4 HD", "Nsport FHD", "Nsport+ FHD", "Premium Calcio 1 HD", "RMC Sport 1 HD", "RMC Sport 2 HD", "RMC Sport 3 FHD", "RMC Sport 3 HD", "RMC Sport 4 FHD", "RMC Sport 4 HD", "Sky Calcio 1 FHD", "Sky Calcio 2 FHD", "Sky Calcio 3 FHD", "Sky Calcio 4 FHD", "Sky Calcio 5 HD", "Sky Calcio 6 HD", "Sky Calcio 7 HD", "Sky Dazn Bar HD", "Sky Sport 1 +", "Sky Sport 1 FHD", "Sky Sport 1 HD", "Sky Sport 2 FHD", "Sky Sport 2 HD", "Sky Sport Bundesliga 1 HD", "Sky Sport Bundesliga 2 FHD", "Sky Sport Bundesliga 2 HD", "Sky Sport DAZN 2 HD", "Sky Sports 4 HD", "Sky Sports 5 HD", "Sky Sports Action FHD", "Sky Sports Action HD", "Sky Sports Arena FHD", "Sky Sports Arena HD", "Sky Sports At The Races", "Sky Sports Cricket FHD", "Sky Sports Cricket HD", "Sky Sports Darts HD", "Sky Sports F1 FHD", "Sky Sports F1 HD", "Sky Sports Football FHD", "Sky Sports Football HD", "Sky Sports Golf FHD", "Sky Sports Golf HD", "Sky Sports HD", "Sky Sports Main Event HD", "Sky Sports Mix FHD", "Sky Sports Mix HD", "Sky Sports News FHD", "Sky Sports News HD", "Sky Sports Premier Langue HD", "Sky Sports Premier League FHD", "Sky Sports Premier League HD", "Sky Sports Racing HD", "Sky Sports The Open HD", "Sky Supercalcio Serie A HD", "Sport Klub 1", "Sport Klub 1 FHD", "Sport Klub 1 HD", "Sport Klub 2", "Sport Klub 2 FHD", "Sport Klub 2 HD", "Sport Klub 3", "Sport Klub 3 FHD", "Sport Klub 3 HD", "Sport TV + HD", "Sport TV 1 FHD", "Sport TV 1 HD", "Sport TV 2 FHD", "Sport TV 2 HD", "Sport TV 3 FHD", "Sport TV 3 HD", "Sport TV 4 FHD", "Sport TV 4 HD", "Sport TV 5 FHD", "Sport TV 5 HD", "Sport TV NBA FHD", "Sport TV NBA HD", "Sportv 2 FHD", "Sportv 3 FHD", "Sportv FHD", "Super Sport 1 FHD", "Super Sport 2 FHD", "Super Sport 3 FHD", "Super Sport 4 FHD", "Super Sport 5 FHD", "Super Sport 6 FHD", "Super Sport 7 FHD", "Super Sport 8 FHD", "Super Sport 9 FHD", "Super Sport 10 FHD", "Super Sport 11 FHD", "Super Sport 12 FHD", "Super Sport Blitz FHD", "Super Sport Maximo", "Telekom Bundesliga 1 HD", "Telekom Bundesliga 2 HD", "Telekom Bundesliga 3 HD", "Telekom Bundesliga 4 HD", "Telekom Sport 1 FHD", "Telekom Sport 2 FHD", "Telekom Sport 3 FHD", "Telekom Sport 4 FHD", "Top Calcio 24", "Trace Sport Stars FHD", "Trace Sport Stars HD", "Trace Sports Stars HD", "Tring Sport 1 FHD", "Tring Sport 2 FHD", "Tring Sport 3 HD", "TSN 1 HD", "TSN 2 FHD", "TSN 2 HD", "TSN 3 FHD", "TSN 3 HD", "TSN 4 FHD", "TSN 4 HD", "TSN 5 FHD", "TSN 5 FHD (FR)", "TSN 5 HD", "TSN Visual Radio", "Tyc Sports HD", "UFC Fight Pass HD", "Vetrina Extra Dazn", "Voo Sport 1", "Voo Sport 1 FHD", "Voo Sport 2", "Voo Sport Word 1", "Voo Sport World 1 HD", "Voo Sport World 2 FHD", "Voo Sport World 3 FHD", "Voo Sports", "Winsport+ HD", "Winsports FHD", "Winsports HD", "Ziggo 1 Golf HD", "Ziggo 1 Racing HD", "Ziggo 1 Select HD", "Ziggo 1 Voetbal", "Ziggo Docu FHD", "Ziggo Extra 1 FHD", "Ziggo Extra 2 FHD", "Ziggo Extra HD", "Ziggo FHD", "Ziggo Golf FHD", "Ziggo Racing FHD", "Ziggo Select FHD", "Ziggo Sports", "Ziggo Voetbal FHD" 
    ]
  },
  {
    name: "Formule 1 & Motorsport",
    icon: "🏎️",
    channels: [
      "F1 Live Races FHD", "F1 Pit Lane Channel HD", "F1 Onboard Cameras HD", "F1 Data Channel HD",
      "UK Sky Sports F1 FHD", "DE Sky Sport F1 FHD", "NL Viaplay F1 HD", "NL Ziggo Sport Racing HD",
      "MotoGP Live FHD", "INTL Eurosport 1 HD", "INTL Eurosport 2 HD", "UK BT Sport MotoGP HD",
      "NASCAR Channel FHD", "IndyCar Live FHD", "WRC Live HD", "Rally TV HD"
    ]
  },
  {
    name: "Films & Series",
    icon: "🎬",
    channels: [
      "NL Film1 Premiere HD", "NL Film1 Action HD", "NL Film1 Drama HD", "NL Film1 Family HD",
      "UK Sky Cinema Premiere FHD", "UK Sky Cinema Action FHD", "UK Sky Cinema Comedy FHD",
      "UK Sky Cinema Drama FHD", "UK Sky Cinema Family FHD", "UK Sky Cinema Thriller FHD",
      "UK Sky Cinema Sci-Fi FHD", "UK Sky Cinema Hits FHD", "UK Sky Cinema Greats FHD",
      "US HBO HD", "US HBO 2 HD", "US Showtime HD", "US Starz HD", "US Cinemax HD",
      "DE Sky Cinema Premieren FHD", "DE Sky Cinema Action FHD", "DE Sky Cinema Family FHD",
      "FR Canal+ Cinéma FHD", "FR OCS Max HD", "FR OCS Choc HD", "ES Movistar Cine HD"
    ]
  },
  {
    name: "Documentaire",
    icon: "🌍",
    channels: [
    "Animal Planet", "Animal Planet +1", "Animal Planet East", "Animal Planet FHD", "Animal Planet HD", "Animaux HD", "BBC Earth", "BBC Earth FHD", "BBC Earth HD", "Bein Nat Geo HD", "Bein Nat Geo People HD", "Bein Nat Geo Wild HD", "Caca & Pesca HD", "Caccia & Pesca HD", "Caccia E Pesca", "Canal De Historia", "Canal Discovery FHD", "Canal Historia", "Canal History HD", "Canal+ Discovery HD", "Caza & Pesca FHD", "CBS WOWK Huntington", "Crime+ Investigation", "Crime+ Investigation FHD", "Crime+ Investigation HD", "Discovery +1", "Discovery Asia", "Discovery Asia World", "Discovery Ch HD", "Discovery Channel", "Discovery Channel East", "Discovery Channel FHD", "Discovery Channel HD", "Discovery CI", "Discovery Civilization HD", "Discovery DTX", "Discovery Familia HD", "Discovery Family FHD", "Discovery Family HD", "Discovery Focus", "Discovery France HD", "Discovery Frisbee HD", "Discovery H & HD", "Discovery H&H", "Discovery H&H +1 HD", "Discovery H&H FHD", "Discovery Historia", "Discovery History HD", "Discovery Kids", "Discovery Kids FHD", "Discovery Kids HD", "Discovery Life HD", "Discovery MAX", "Discovery Nove HD", "Discovery Real Time HD", "Discovery Sci-Fi", "Discovery Sci-Fi HD", "Discovery Science", "Discovery Science FHD", "Discovery Science HD", "Discovery Science Hindi", "Discovery Serbia", "Discovery Shed HD", "Discovery Showcase", "Discovery Showcase FHD", "Discovery Showcase HD", "Discovery TH", "Discovery Theater FHD", "Discovery Theater HD", "Discovery TLC", "Discovery TLC HD", "Discovery TLC Pacific", "Discovery Turbo", "Discovery Turbo FHD", "Discovery Turbo HD", "Discovery Turbo Xtra", "Discovery Turbo Xtra FHD", "Discovery Velocity HD", "Discovery World", "Discovery World FHD", "Discovery World HD", "DMAX", "DMAX 1 HD", "DMAX FHD", "DMAX HD", "DMAX HD +1", "DMAX HQ", "Eagle Nature Discovery 4K", "Fishing & Hunting HD", "HGTV", "HGTV East", "HGTV FHD", "HGTV HD", "HGTV West", "Historia", "History", "History (FR)", "History / Blue Ant", "History 2", "History 2 FHD", "History 2 HD", "History Channel", "History Channel +1", "History Channel 2 HD", "History Channel East", "History Channel FHD", "History Channel HD", "History DUT FHD", "History GR", "History HD", "History JP", "History Lab", "Hunting", "I Discovery Sverige", "Investigation Discovery", "Investigation Discovery East", "Investigation Discovery FHD", "Investigation Discovery HD", "Investigation Discovery Xtra", "Investigation Discovery Xtra FHD", "Investigation Discovery Xtra HD", "Kurdmax", "Kurdmax HD", "Kurdmax HD (Kurmaji)", "Kurdmax Kurmanchi HD", "Kurdmax Kurmanji HD", "Kurdmax Pepule", "Kurdmax Pepule Kurmanci HD", "Kurdmax Pepûle Sorani HD", "Kurdmax Show Kurmanchi HD", "Kurdmax Show Kurmanci", "Kurdmax Show Kurmanji HD", "Kurdmax Show Sorani HD", "Kurdmax Show TV HD", "Kurdmax Sorani HD", "MyHD Animal Planet", "MyHD Aroma Discovery", "MyHD Discovery HD", "MyHD Discovery SC HD", "MyHD Discovery Science HD", "MyHD NAT GEO HD", "MyHD NAT GEO Kids", "MyHD NAT GEO People", "MyHD NAT GEO Wild HD", "NAT GEO", "NAT GEO Abu Dhabi", "NAT GEO East", "NAT GEO FHD", "NAT GEO HD", "NAT GEO Kids", "NAT GEO Kids FHD", "NAT GEO Kids HD", "NAT GEO Pacific", "NAT GEO People", "NAT GEO People FHD", "NAT GEO People HD", "NAT GEO Wild", "NAT GEO Wild East HD", "NAT GEO Wild FHD", "NAT GEO Wild HD", "NAT GEO Wild MYN", "Nature & History HD", "Nova Premiere History FHD", "OSN Animal Planet HD", "OSN Discovery Family HD", "OSN Discovery HD", "OSN Discovery History", "OSN Discovery Life HD", "OSN Discovery Science HD", "OSN Discovery Showcase", "OSN History 2", "OSN History Channel", "OSN Investigation Discovery", "OSN NAT GEO Abu Dhabi", "OSN NAT GEO HD", "OSN NAT GEO People HD", "OTE History HD", "Pescara TV", "Polsat Viasat History FHD", "Sci Discovery Science HD", "Science & Vie HD", "Science & Vie TV", "Sky Discovery Channel HD", "Sky Discovery Science", "Sky History HD", "Sky NAT GEO HD", "TeleClub Discovery Channel HD", "TLC Discovery", "Tring History", "TVP Historia", "Ushuaia HD", "Viasat History", "Viasat History FHD", "Viasat History HD", "Viasat Nature & History HD", "Viasat Nature/History HD", "X History HD"  
    ]
  },
  {
    name: "Kinderen",
    icon: "👶",
    channels: [
      // Netherlands Kids
      "NL nickelodeon FHD", "NL nickelodeon HD", "NL nickelodeon Junior FHD", "NL nickelodeon Junior HD",
      "NL nickelodeon TOONS FHD", "NL Nick Music FHD", "NL Nick Music HD",
      "NL Disney Channel FHD", "NL Disney Channel HD", "NL Disney XD FHD", "NL Disney XD HD",
      "NL Disney JR FHD", "NL Disney JR HD", "NL JBO Disney FHD", "NL JBO Disney HD",
      "NL Veronica / Disney XD FHD", "NL CARTOON NETWORK FHD", "NL CARTOON NETWORK HD",
      "NL Boomerang FHD", "NL Boomerang HD", "NL Baby TV FHD", "NL Baby TV HD",
      "NL JimJam FHD", "NL JimJam HD", "NL NPO Zapp FHD", "NL NPO Zappelin FHD",
      // Belgium Kids
      "BE Ketnet FHD", "BE Ketnet HD", "BE Ketnet Junior FHD", "BE Ketnet Junior HD",
      "BE Disney Channel FHD", "BE Disney Channel HD", "BE Disney XD FHD", "BE Disney Junior FHD",
      "BE nickelodeon FHD", "BE nickelodeon HD", "BE nickelodeon Junior FHD",
      "BE CARTOON NETWORK FHD", "BE CARTOON NETWORK HD", "BE Boomerang FHD",
      "BE JimJam FHD", "BE JimJam HD", "BE Baby TV FHD",
      // France Kids
      "FR Disney Channel FHD", "FR Disney Channel HD", "FR Disney Channel +1 FHD", "FR Disney Channel 1 HD",
      "FR Disney CINEMA FHD", "FR Disney CINEMAGIC FHD", "FR Disney CINEMAGIC HD",
      "FR Disney JUNIOR FHD", "FR Disney JUNIOR HD", "FR Disney XD FHD", "FR Disney XD HD",
      "FR nickelodeon FHD", "FR nickelodeon HD", "FR nickelodeon 4 Teen FHD",
      "FR nickelodeon Junior FHD", "FR nickelodeon Junior HD",
      "FR CARTOON NETWORK FHD", "FR CARTOON NETWORK HD", "FR Boomerang FHD", "FR Boing FHD",
      "FR TELETOON FHD", "FR TELETOON 1 HD", "FR TELETOON+ FHD", "FR Tiji FHD", "FR Piwi+ FHD",
      // Germany Kids
      "DE Disney Channel FHD", "DE Disney Channel HD", "DE Sky Disney Channel FHD", "DE Sky Disney Channel HD",
      "DE Disney Cinemagic FHD", "DE Disney Cinemagic HD", "DE Disney Plus Film FHD",
      "DE Disney JIUNIOR FHD", "DE Disney Junior FHD", "DE Disney Junior HD",
      "DE Disney XD FHD", "DE Disney XD HD",
      "DE nickelodeon FHD", "DE nickelodeon HD", "DE Nick Junior FHD", "DE Nick Junior HD",
      "DE NICK / MTV FHD", "DE Nick/Comedy Central FHD",
      "DE CARTOON NETWORK FHD", "DE CARTOON NETWORK HD", "DE Boomerang FHD",
      "DE JUNIOR FHD", "DE JUNIOR HD", "DE Sky Junior FHD", "DE Sky Junior HD",
      "DE KiKA FHD", "DE KiKA HD", "DE Baby TV FHD", "DE Baby TV HD",
      // Spain Kids
      "ES Disney Channel FHD", "ES Disney Channel HD", "ES MOVISTAR Disney FHD",
      "ES Disney+ FHD", "ES MOVISTAR Disney+ FHD",
      "ES Disney JR FHD", "ES Disney Jœnior FHD", "ES Disney XD FHD", "ES Disney XD HD",
      "ES nickelodeon FHD", "ES nickelodeon HD", "ES nickelodeon Iberia FHD",
      "ES Nick Junior FHD", "ES Nick Junior HD",
      "ES Cartoon Network FHD", "ES Cartoon Network HD", "ES Boomerang FHD", "ES Boomerang HD",
      "ES Boing FHD", "ES Boing HD", "ES Baby TV FHD", "ES Baby TV HD", "ES Clan FHD", "ES Clan HD",
      // UK Kids
      "UK Disney Channel FHD", "UK Disney Channel HD", "UK Disney Junior FHD", "UK Disney Junior HD",
      "UK Disney XD FHD", "UK Disney XD HD", "UK Nickelodeon FHD", "UK Nickelodeon HD",
      "UK Nick Jr FHD", "UK Nick Jr HD", "UK Nicktoons FHD", "UK TeenNick FHD",
      "UK Cartoon Network FHD", "UK Cartoon Network HD", "UK Boomerang FHD", "UK Boomerang HD",
      "UK CBeebies FHD", "UK CBeebies HD", "UK CBBC FHD", "UK CBBC HD",
      "UK Baby TV FHD", "UK Pop FHD", "UK Tiny Pop FHD",
      // USA Kids
      "US Nickelodeon FHD", "US Nickelodeon HD", "US Nick Jr FHD", "US Nick Jr HD",
      "US Nicktoons FHD", "US TeenNick FHD",
      "US Disney Channel FHD", "US Disney Channel HD", "US Disney Junior FHD", "US Disney Junior HD",
      "US Disney XD FHD", "US Disney XD HD",
      "US Cartoon Network FHD", "US Cartoon Network HD", "US Boomerang FHD", "US Boomerang HD",
      "US Universal Kids FHD", "US PBS Kids FHD",
      // International Kids
      "INTL Cartoonito FHD", "INTL Cartoonito HD", "INTL DuckTV FHD", "INTL DuckTV HD",
      "INTL Baby First FHD", "INTL Baby First HD", "INTL Da Vinci Kids FHD",
      "INTL Dreamworks FHD", "INTL Lego Channel FHD"
    ]
  },
  {
    name: "Muziek",
    icon: "🎵",
    channels: [
      "NL MTV HD", "NL MTV Live HD", "NL MTV Hits HD", "NL VH1 HD", "NL Slam! TV HD",
      "NL 100% NL TV HD", "NL Stingray Classica HD", "NL Stingray DJAZZ HD",
      "BE MNM HD", "DE Deluxe Music HD", "DE Jukebox HD", "UK MTV Base HD",
      "UK MTV Classic HD", "UK MTV Rocks HD", "UK MTV Dance HD", "INTL Trace Urban HD"
    ]
  },
  {
    name: "Nieuws",
    icon: "📰",
    channels: [
      "NL NPO Nieuws", "NL RTL Nieuws", "NL Euronews NL HD", "BE VRT NWS HD",
      "UK BBC News HD", "UK Sky News HD", "UK CNN International HD", "US CNN HD",
      "US Fox News HD", "US MSNBC HD", "US CNBC HD", "US Bloomberg HD",
      "DE n-tv HD", "DE Welt HD", "FR France 24 HD", "FR BFM TV HD",
      "INTL Al Jazeera English HD", "INTL DW English HD", "INTL RT HD", "INTL TRT World HD"
    ]
  },
  // === EUROPE ===
  {
    name: "Nederland",
    icon: "🇳🇱",
    channels: [
      // Main TV Channels
      "NL NPO 1 FHD", "NL NPO 1 HD", "NL NPO 2 FHD", "NL NPO 2 HD", "NL NPO 3 FHD", "NL NPO 3 HD",
      "NL RTL 4 FHD", "NL RTL 4 HD", "NL RTL 5 FHD", "NL RTL 5 HD", "NL RTL 7 FHD", "NL RTL 7 HD",
      "NL RTL 8 FHD", "NL RTL 8 HD", "NL RTL Z FHD", "NL RTL Z HD", "NL RTL Lounge HD", "NL RTL Crime HD",
      "NL SBS6 FHD", "NL SBS6 HD", "NL SBS9 FHD", "NL SBS9 HD", "NL NET5 FHD", "NL NET5 HD",
      "NL Veronica FHD", "NL Veronica HD", "NL Spike FHD", "NL Spike HD",
      "NL NPO Nieuws FHD", "NL NPO Nieuws HD", "NL NPO Politiek HD", "NL NPO 1 Extra HD", "NL NPO 2 Extra HD",
      "NL NPO Zapp FHD", "NL NPO Zappelin FHD", "NL NPO Soul & Jazz HD", "NL NPO 101 HD",
      "NL BVN FHD", "NL BVN HD", "NL ONS FHD", "NL ONS HD",
      // Sports
      "NL ZIGGO FHD", "NL ZIGGO Sports", "NL ZIGGO Select FHD", "NL ZIGGO Select HD", "NL ZIGGO 1 Select HD",
      "NL ZIGGO RACING FHD", "NL ZIGGO 1 RACING HD", "NL ZIGGO GOLF FHD", "NL ZIGGO 1 Golf HD",
      "NL ZIGGO VOETBAL FHD", "NL ZIGGO 1 Voetbal", "NL ZIGGO EXTRA 1 FHD", "NL ZIGGO EXTRA 2 FHD",
      "NL ZIGGO Extra HD", "NL ZIGGO Docu FHD",
      "NL ESPN 1 FHD", "NL ESPN 1 HD", "NL ESPN 2 FHD", "NL ESPN 2 HD", "NL ESPN 3 FHD", "NL ESPN 3 HD",
      "NL ESPN 4 FHD", "NL ESPN 4 HD", "NL EUROSPORT 1 FHD", "NL EUROSPORT 2 FHD", "NL EUROSPORT HD",
      "NL Viaplay 1 FHD", "NL Viaplay 1 HD", "NL Viaplay 2 FHD", "NL Viaplay F1 FHD", "NL Viaplay Darts HD",
      // Documentary
      "NL Discovery Channel FHD", "NL Discovery Channel HD", "NL Discovery Science FHD", "NL Discovery Science HD",
      "NL Discovery SHOWCASE FHD", "NL Discovery World HD", "NL NAT GEO FHD", "NL NAT GEO HD",
      "NL NAT GEO Wild FHD", "NL NAT GEO Wild HD", "NL ANIMAL PLANET FHD", "NL ANIMAL PLANET HD",
      "NL History Channel FHD", "NL History Channel HD", "NL History DUT FHD",
      "NL Crime+ Investigation FHD", "NL Crime+ Investigation HD", "NL Investigation Discovery FHD",
      "NL TLC FHD", "NL TLC HD", "NL DMAX FHD", "NL DMAX HD",
      // Movies & Series
      "NL Film1 Premiere FHD", "NL Film1 Premiere HD", "NL Film1 Action FHD", "NL Film1 Action HD",
      "NL Film1 Drama FHD", "NL Film1 Drama HD", "NL Film1 Family FHD", "NL Film1 Family HD",
      "NL HBO FHD", "NL HBO HD", "NL HBO 2 FHD", "NL HBO 3 HD", "NL HBO Max FHD",
      "NL Fox FHD", "NL Fox HD", "NL AMC FHD", "NL AMC HD", "NL Comedy Central FHD", "NL Comedy Central HD",
      "NL Paramount Network FHD", "NL Paramount Network HD",
      // Kids
      "NL Disney Channel FHD", "NL Disney Channel HD", "NL Disney XD FHD", "NL Disney XD HD",
      "NL Disney JR FHD", "NL Disney JR HD", "NL JBO Disney HD",
      "NL nickelodeon FHD", "NL nickelodeon HD", "NL nickelodeon Junior FHD", "NL nickelodeon TOONS FHD",
      "NL CARTOON NETWORK FHD", "NL CARTOON NETWORK HD", "NL Boomerang FHD", "NL Boomerang HD",
      "NL Baby TV FHD", "NL Baby TV HD", "NL JimJam FHD", "NL JimJam HD", "NL Veronica / Disney XD FHD",
      // Music
      "NL 100% NL TV FHD", "NL 100% NL TV", "NL MTV 24 Music HD", "NL MTV Live HD", "NL MTV Music 24",
      "NL Nick Music HD", "NL VH1 CLASSIC HD", "NL Stingray CMusic HD", "NL V2Beat Music HD",
      "NL Slam! TV FHD", "NL XITE FHD",
      // Lifestyle
      "NL 24 kitchen FHD", "NL 24 kitchen HD", "NL BBC First FHD", "NL BBC First HD",
      "NL E! FHD", "NL E! HD", "NL Travel Channel FHD", "NL Travel Channel HD",
      "NL TLC FHD", "NL TLC HD", "NL HGTV FHD", "NL HGTV HD", "NL Food Network FHD",
      // Regional
      "NL AT5 FHD", "NL AT5 HD", "NL RTV Oost FHD", "NL L1 TV FHD", "NL Omroep Brabant FHD",
      "NL RTV Noord FHD", "NL TV Gelderland FHD", "NL NH Nieuws FHD", "NL RTV Utrecht FHD",
      "NL Omroep Zeeland FHD", "NL RTV Drenthe FHD", "NL Omrop Fryslân FHD", "NL RTV Rijnmond FHD",
      "NL TV West FHD", "NL Omroep Flevoland FHD"
    ]
  },
  {
    name: "België",
    icon: "🇧🇪",
    channels: [
      // Flemish Main Channels
      "BE één FHD", "BE één HD", "BE Canvas FHD", "BE Canvas HD", "BE Ketnet FHD", "BE Ketnet HD",
      "BE VRT NWS FHD", "BE VRT NWS HD", "BE VRT MAX FHD",
      "BE VTM FHD", "BE VTM HD", "BE VTM 2 FHD", "BE VTM 2 HD", "BE VTM 3 FHD", "BE VTM 3 HD",
      "BE VTM 4 FHD", "BE VTM 4 HD", "BE VTM Gold FHD", "BE VTM Kids FHD", "BE VTM Kids Jr FHD",
      "BE Play4 FHD", "BE Play4 HD", "BE Play5 FHD", "BE Play5 HD", "BE Play6 FHD", "BE Play6 HD",
      "BE Play7 FHD", "BE Play7 HD", "BE GoPlay FHD",
      "BE Vitaya FHD", "BE Vitaya HD", "BE CAZ FHD", "BE CAZ HD", "BE CAZ 2 FHD", "BE CAZ 2 HD",
      "BE Eclips TV FHD", "BE Ment TV FHD", "BE Njam! FHD", "BE Q2 FHD", "BE QMusic FHD",
      // French Belgian Channels
      "BE RTBF La Une FHD", "BE RTBF La Une HD", "BE RTBF La Deux FHD", "BE RTBF La Deux HD",
      "BE RTBF La Trois FHD", "BE RTBF La Trois HD", "BE RTBF Auvio FHD", "BE RTBF Info FHD",
      "BE RTL TVI FHD", "BE RTL TVI HD", "BE Club RTL FHD", "BE Club RTL HD",
      "BE Plug RTL FHD", "BE Plug RTL HD", "BE RTL Play FHD",
      "BE AB3 FHD", "BE AB3 HD", "BE ABXplore FHD", "BE ABXplore HD",
      "BE LN24 FHD", "BE LN24 HD", "BE BX1 FHD", "BE BX1 HD",
      // Sports
      "BE VOO SPORT 1 FHD", "BE VOO SPORT 1 HD", "BE VOO SPORT 2 FHD", "BE VOO SPORT 2 HD",
      "BE VOO SPORT WORLD 1 FHD", "BE Voo Sport World 1 HD", "BE VOO SPORT WORLD 2 FHD",
      "BE VOO SPORT WORLD 3 FHD", "BE VOO SPORTS FHD",
      "BE Eleven Sports 1 FHD", "BE Eleven Sports 1 HD", "BE Eleven Sports 2 FHD", "BE Eleven Sports 2 HD",
      "BE Eleven Sports 3 FHD", "BE Eleven Sports 3 HD", "BE Eleven Sports 4 FHD",
      "BE Proximus Sports 1 FHD", "BE Proximus Sports 1 HD", "BE Proximus Sports 2 FHD",
      "BE Telenet Play Sports 1 FHD", "BE Telenet Play Sports 2 FHD", "BE Telenet Play Sports 3 FHD",
      "BE EUROSPORT 1 FHD", "BE EUROSPORT 1 HD", "BE EUROSPORT 2 FHD", "BE EUROSPORT 2 HD",
      "BE NOVA SPORT FHD", "BE NOVA SPORT HD", "BE TRACE Sport Stars FHD",
      // Documentary
      "BE NAT GEO FHD", "BE NAT GEO HD", "BE NAT GEO Wild FHD", "BE NAT GEO Wild HD",
      "BE Discovery Channel FHD", "BE Discovery Channel HD", "BE Discovery Science FHD",
      "BE History FHD", "BE History HD", "BE Crime+ Investigation FHD",
      "BE ANIMAL PLANET FHD", "BE ANIMAL PLANET HD", "BE TLC FHD", "BE TLC HD",
      // Movies & Series
      "BE Film1 Premiere FHD", "BE Film1 Premiere HD", "BE Film1 Action FHD", "BE Film1 Drama FHD",
      "BE HBO FHD", "BE HBO HD", "BE HBO 2 FHD", "BE HBO Max FHD",
      "BE Streamz FHD", "BE Streamz HD", "BE Streamz+ FHD",
      "BE Fox FHD", "BE Fox HD", "BE AMC FHD", "BE AMC HD",
      "BE Comedy Central FHD", "BE Comedy Central HD", "BE Paramount Network FHD",
      "BE BBC One FHD", "BE BBC One HD", "BE BBC Two FHD", "BE BBC Two HD", "BE BBC First FHD",
      // Kids
      "BE Ketnet Junior FHD", "BE Ketnet Junior HD", "BE Disney Channel FHD", "BE Disney Channel HD",
      "BE Disney XD FHD", "BE Disney Junior FHD", "BE nickelodeon FHD", "BE nickelodeon HD",
      "BE nickelodeon Junior FHD", "BE CARTOON NETWORK FHD", "BE CARTOON NETWORK HD",
      "BE Boomerang FHD", "BE JimJam FHD", "BE JimJam HD", "BE Baby TV FHD",
      // Music
      "BE MNM FHD", "BE MNM HD", "BE Studio Brussel FHD", "BE QMusic FHD", "BE JOE fm TV FHD",
      "BE Nostalgie FHD", "BE NRJ Hits FHD", "BE NRJ Hits HD", "BE Balkanika Music TV FHD",
      "BE MTV FHD", "BE MTV HD", "BE VH1 FHD",
      // Regional
      "BE TV Oost FHD", "BE ATV FHD", "BE ROB TV FHD", "BE TV Limburg FHD", "BE Focus TV FHD",
      "BE Ring TV FHD", "BE AVS FHD", "BE WTV FHD", "BE TVL FHD", "BE TV Brussel FHD"
    ]
  },
  {
    name: "Duitsland",
    icon: "🇩🇪",
    channels: [
      // Main Public Channels
      "DE ARD FHD", "DE ARD HD", "DE Das Erste FHD", "DE Das Erste HD", "DE ZDF FHD", "DE ZDF HD",
      "DE ZDFneo FHD", "DE ZDFneo HD", "DE ZDFinfo FHD", "DE ZDFinfo HD",
      "DE ARD ONE FHD", "DE ARD ONE HD", "DE ARD Alpha FHD", "DE ARD Alpha HD",
      "DE 3sat FHD", "DE 3sat HD", "DE Arte FHD", "DE Arte HD", "DE Phoenix FHD", "DE Phoenix HD",
      "DE BR FHD", "DE BR HD", "DE HR FHD", "DE HR HD", "DE MDR FHD", "DE MDR HD",
      "DE NDR FHD", "DE NDR HD", "DE RBB FHD", "DE RBB HD", "DE SWR FHD", "DE SWR HD",
      "DE WDR FHD", "DE WDR HD", "DE SR FHD", "DE SR HD",
      // Main Private Channels
      "DE RTL FHD", "DE RTL HD", "DE RTL UHD 4K", "DE RTL2 FHD", "DE RTL2 HD",
      "DE VOX FHD", "DE VOX HD", "DE Super RTL FHD", "DE Super RTL HD",
      "DE Nitro FHD", "DE Nitro HD", "DE RTLplus FHD", "DE RTLplus HD",
      "DE RTL Crime FHD", "DE RTL Living FHD", "DE RTL Passion FHD", "DE N-TV FHD", "DE N-TV HD",
      "DE ProSieben FHD", "DE ProSieben HD", "DE ProSieben Fun FHD", "DE ProSieben Fun HD",
      "DE ProSieben MAX FHD", "DE ProSieben MAX HD", "DE ProSieben Maxx FHD", "DE ProSieben Maxx HD",
      "DE SAT.1 FHD", "DE SAT.1 HD", "DE SAT.1 Gold FHD", "DE SAT.1 Gold HD",
      "DE Kabel1 FHD", "DE Kabel1 HD", "DE Kabel1 Doku FHD", "DE Kabel1 Doku HD",
      "DE Sixx FHD", "DE Sixx HD", "DE Welt FHD", "DE Welt HD", "DE Tagesschau24 FHD",
      // Sports
      "DE DAZN 1 FHD", "DE DAZN 1 HD", "DE DAZN BAR 1 FHD", "DE DAZN 1 Bar HD",
      "DE DAZN 2 FHD", "DE DAZN 2 HD", "DE DAZN Bar 2 FHD", "DE DAZN 2 Bar HD",
      "DE DAZN 3 FHD", "DE DAZN 4 FHD",
      "DE Sky Sport 1 FHD", "DE Sky Sport 1 HD", "DE Sky Sport 1 + HD",
      "DE Sky Sport 2 FHD", "DE Sky Sport 2 HD", "DE Sky Sport 3 FHD", "DE Sky Sport 3 HD",
      "DE Sky Sport Bundesliga 1 FHD", "DE Sky Sport Bundesliga 1 HD",
      "DE Sky Sport Bundesliga 2 FHD", "DE Sky Sport Bundesliga 2 HD",
      "DE Sky Sport DAZN 2 FHD", "DE Sky Sport DAZN 2 HD",
      "DE Sky Sport F1 FHD", "DE Sky Sport Golf FHD", "DE Sky Sport Tennis FHD", "DE Sky Sport UHD",
      "DE TELEKOM BUNDESLIGA 1 FHD", "DE TELEKOM BUNDESLIGA 1 HD",
      "DE TELEKOM BUNDESLIGA 2 FHD", "DE TELEKOM BUNDESLIGA 2 HD",
      "DE TELEKOM BUNDESLIGA 3 FHD", "DE TELEKOM BUNDESLIGA 3 HD",
      "DE TELEKOM BUNDESLIGA 4 FHD", "DE TELEKOM BUNDESLIGA 4 HD",
      "DE EUROSPORT 1 FHD", "DE EUROSPORT 1 HD", "DE EUROSPORT HD",
      "DE EUROSPORT 2 FHD", "DE EUROSPORT 2 HD", "DE EUROSPORT 2 EXTRA FHD", "DE EUROSPORT 2 Exra HD",
      "DE EUROSPORT 2 XTRA FHD", "DE EUROSPORT Xtra 2 HD", "DE Sport1 FHD", "DE Sport1 HD", "DE Sport1+ FHD",
      // Documentary
      "DE Discovery Channel FHD", "DE Discovery Channel HD", "DE Sky Discovery Channel FHD", "DE Sky Discovery Channel HD",
      "DE DMAX FHD", "DE DMAX HD", "DE DMAX HQ",
      "DE NAT GEO FHD", "DE NAT GEO HD", "DE Sky NAT GEO FHD", "DE Sky NAT GEO HD",
      "DE NAT GEO Wild FHD", "DE NAT GEO Wild HD",
      "DE ANIMAL PLANET FHD", "DE ANIMAL PLANET HD",
      "DE History FHD", "DE Histori HD", "DE Sky History FHD", "DE Sky History HD",
      "DE Crime+ Investigation FHD", "DE Crime+ Investigation HD",
      "DE A&E FHD", "DE A&E HD", "DE TLC FHD", "DE TLC HD", "DE HGTV FHD",
      // Movies & Series
      "DE Sky Cinema Premieren FHD", "DE Sky Cinema Premieren HD", "DE Sky Cinema Premieren +24 FHD",
      "DE Sky Cinema Best Of FHD", "DE Sky Cinema Action FHD", "DE Sky Cinema Family FHD",
      "DE Sky Cinema Thriller FHD", "DE Sky Cinema Comedy FHD", "DE Sky Cinema Hits FHD", "DE Sky Cinema Classics FHD",
      "DE Sky Atlantic FHD", "DE Sky Atlantic HD", "DE Sky One FHD", "DE Sky One HD",
      "DE Sky Krimi FHD", "DE Sky Replay FHD",
      "DE TNT Film FHD", "DE TNT Serie FHD", "DE TNT Comedy FHD",
      "DE Warner TV Serie FHD", "DE Warner TV Film FHD", "DE Warner TV Comedy FHD",
      "DE Universal TV FHD", "DE 13th Street FHD", "DE Syfy FHD", "DE SciFi FHD",
      "DE Kinowelt TV FHD", "DE MGM FHD", "DE Heimatkanal FHD", "DE Romance TV FHD",
      "DE Silverline FHD", "DE AXN FHD", "DE Fox FHD", "DE Motorvision TV FHD",
      // Kids
      "DE Disney Channel FHD", "DE Disney Channel HD", "DE Sky Disney Channel FHD", "DE Sky Disney Channel HD",
      "DE Disney Cinemagic FHD", "DE Disney Cinemagic HD", "DE Disney Plus Film FHD",
      "DE Disney JIUNIOR FHD", "DE Disney Junior FHD", "DE Disney Junior HD",
      "DE Disney XD FHD", "DE Disney XD HD",
      "DE nickelodeon FHD", "DE nickelodeon HD", "DE Nick Junior FHD", "DE Nick Junior HD",
      "DE NICK / MTV FHD", "DE Nick/Comedy Central FHD",
      "DE CARTOON NETWORK FHD", "DE CARTOON NETWORK HD", "DE Boomerang FHD",
      "DE JUNIOR FHD", "DE JUNIOR HD", "DE Sky Junior FHD", "DE Sky Junior HD",
      "DE KiKA FHD", "DE KiKA HD", "DE Baby TV FHD", "DE Baby TV HD",
      // Music
      "DE MTV FHD", "DE MTV HD", "DE MTV Live FHD", "DE MTV Dance FHD", "DE MTV Dance HD",
      "DE Comedy Central FHD", "DE Comedy Central HD",
      "DE Deluxe Music FHD", "DE Deluxe Music HD", "DE Luxe Music FHD",
      "DE Deutsches Musik Fernsehen FHD", "DE eutsches Musik Fernsehen FHD", "DE utsches Musik Fernsehen FHD",
      "DE Music TV 1 FHD", "DE Music TV 1 HD", "DE One Music FHD", "DE One Music HD",
      "DE Bibel TV Musik FHD", "DE Brandnite TV Music FHD", "DE Chaula Music FHD",
      // Lifestyle
      "DE E! FHD", "DE E! HD", "DE Travel Channel FHD", "DE Travel Channel HD",
      "DE ServusTV FHD", "DE ServusTV HD", "DE Tele5 FHD", "DE Tele5 HD",
      "DE TV5 Monde FHD", "DE QVC FHD", "DE HSE FHD"
    ]
  },
  {
    name: "Verenigd Koninkrijk",
    icon: "🇬🇧",
    channels: [
      // General FHD
      "UK CARONA VIRUS INFO", "UK|FHD| BBC 1", "UK|FHD| BBC 2", "UK|FHD| BBC 3/CBBC", "UK|FHD| BBC 4/CBEEBIES",
      "UK|FHD| BBC SCOTLAND", "UK|FHD| ITV 1", "UK|FHD| ITV 2", "UK|FHD| ITV 3", "UK|FHD| ITV 4",
      "UK|FHD| ITV BE", "UK|FHD| CHANNEL 4", "UK|FHD| CHANNEL 5", "UK|FHD| E4", "UK|FHD| CBBC",
      "UK|FHD| 4 SEVEN", "UK|FHD| ALIBI",
      // General SD
      "UK|SD| BBC1", "UK|SD| BBC2", "UK|SD| BBC3/CBBC", "UK|SD| BBC4/CBEEBIES", "UK|SD| BBC PARLIAMENT",
      "UK|SD| ITV 1", "UK|SD| ITV 2", "UK|SD| ITV 3", "UK|SD| ITV 4", "UK|SD| ITV BE", "UK|SD| CHANNEL 4",
      "UK|SD| CHANNEL 5", "UK|SD| CITV", "UK|SD| ALIBI",
      // News FHD
      "UK|FHD| BBC NEWS", "UK|FHD| BBC WORLD NEWS", "UK|FHD| BLOOMBERG", "UK|FHD| CNN", "UK|FHD| FRANCE 24",
      "UK|FHD| RT AMERICA", "UK|FHD| RT DOCUMENTRY", "UK|FHD| RT NEWS", "UK|FHD| RT UK", "UK|FHD| SKY NEWS",
      // News SD
      "UK|SD| BBC NEWS", "UK|SD| BBC WORLD NEWS", "UK|SD| BLOOMBERG", "UK|SD| CNBC", "UK|SD| CNN",
      "UK|SD| EURO NEWS", "UK|SD| FOX NEWS", "UK|SD| FRANCE 24 EN", "UK|HD| AL JAZEERA EN",
      "UK|SD| RT NEWS HD", "UK|SD| SKY NEWS",
      // Cooking
      "UK|SD| FOOD NETWORK", "UK|SD| HOME",
      // Local
      "UK|SD| BBC ALBA", "UK|SD| BBC SCOTLAND", "UK|SD| BBC ONE SCOTLAND", "UK|SD| BBC ONE CAMBRIDGE",
      "UK|SD| BBC ONE CHANNEL ISLANDS", "UK|SD| BBC ONE EAST", "UK|SD| BBC ONE EAST MIDLANDS",
      "UK|SD| BBC ONE LONDON", "UK|SD| BBC ONE NORTH EAST & CUMBRIA", "UK|SD| BBC ONE NORTH WEST",
      "UK|SD| BBC ONE NORTHEN ISLAND", "UK|SD| BBC ONE OXFORD", "UK|SD| BBC ONE SOUTH",
      "UK|SD| BBC One South East", "UK|SD| BBC ONE SOUTH WEST", "UK|SD| BBC ONE WALES", "UK|SD| BBC ONE WEST",
      "UK|SD| BBC ONE WEST MIDLANDS", "UK|SD| BBC ONE YORK", "UK|SD| BBC ONE YORKSHIRE & LINCOLNSHIRE",
      "UK|SD| BBC TWO ENGLAND", "UK|SD| BBC TWO NORTHEN IRELAND", "UK|SD| BBC TWO WALES",
      "UK|SD| CHANNEL 4 MIDLANDS", "UK|SD| CHANNEL 4 NORTH", "UK|SD| CHANNEL 4 NORTHEN IRELAND",
      "UK|SD| CHANNEL 4 SCOTLAND", "UK|SD| CHANNEL 4 SOUTH AND EAST", "UK|SD| ITV LONDON",
      "UK|SD| ITV TYNE TEES", "UK|SD| ITV ANGLIA EAST", "UK|SD| ITV ANGLIA WEST", "UK|SD| ITV CENTRAL EAST",
      "UK|SD| ITV CENTRAL WEST", "UK|SD| ITV GRANADA", "UK|SD| ITV MERIDIAN EAST", "UK|SD| ITV MERIDIAN TV NORTH",
      "UK|SD| ITV MERIDIAN TV SOUTH", "UK|SD| ITV TYNE TEES TV NORTH", "UK|SD| ITV WESTCOUNTRY SOUTH WEST",
      "UK|SD| ITV WESTCOUNTRY WEST", "UK|SD| ITV YORKSHIRE TV EAST", "UK|SD| ITV YORKSHIRE WEST",
      "UK|SD| ITV BORDER", "UK|SD| ITV WALES",
      // Scotland
      "UK|SD| STV", "UK|SD| STV CENTRAL WEST", "UK|SD| STV NORTH", "UK|SD| BORDER SCOTLAND TV",
      // Kids FHD
      "UK|FHD| CARTOON NETWORK", "UK|FHD| DISNEY CHANNEL", "UK|FHD| DISNEY JUNIOR", "UK|FHD| DISNEY XD",
      "UK|FHD| NICK", "UK|FHD| CBEEBIES",
      // Kids SD
      "UK FLIX KIDS SHAUN HET SCHAAP", "UK FLIX KIDS PLUTO", "UK FLIX KIDS THE PINK PANTHER",
      "UK FLIX KIDS TOM AND JERRY", "UK FLIX KIDS MR BEAN", "UK FLIX KIDS LOONEY TUNES",
      "UK FLIX KIDS GOOFY", "UK FLIX KIDS DONALD DUCK", "UK|SD| BABY TV", "UK|SD| BOOMERANG",
      "UK|SD| CARTOONITO (NOT 24)", "UK|SD| CARTOON NETWORK", "UK|SD| DISNEY CHANNEL", "UK|SD| DISNEY XD",
      "UK|SD| NICK JR PEPPA", "UK|SD| NICK JUNIOR", "UK|SD| NICKELODEON", "UK|SD| NICKTOONS",
      "UK|SD| TINY POP", "UK|SD| TINY POP+1",
      // Entertainment FHD
      "UK|FHD| EDEN", "UK|FHD| FOX", "UK|FHD| GOLD", "UK|FHD| DAVE", "UK|FHD| LIFETIME",
      "UK|FHD| E! ENTERTAINMENT", "UK|FHD| MORE 4", "UK|FHD| QUEST", "UK|FHD| SKY ONE", "UK|FHD| STV",
      "UK|FHD| UTV", "UK|FHD| UNIVERSAL", "UK|FHD| WATCH", "UK|FHD| SKY ATLANTIC", "UK|FHD| SKY ARTS",
      "UK|FHD| SKY WITNESS", "UK|FHD| TLC", "UK|FHD| COMEDY CENTRAL",
      // Entertainment SD
      "UK|SD| SKY ONE", "UK|SD| SKY TWO", "UK|SD| 4 SEVEN", "UK|SD| 5 SELECT", "UK|SD| 5 STAR",
      "UK|SD| 5 USA", "UK|SD| BET", "UK|SD| BLAZE", "UK|SD| CBS ACTION", "UK|SD| CBS DRAMA",
      "UK|SD| CBS REALITY", "UK|SD| CHALLENGE", "UK|SD| DAVE", "UK|SD| DMAX", "UK|SD| DRAMA",
      "UK|SD| E4", "UK|SD| EDEN", "UK|SD| FOX", "UK|SD| GOLD", "UK|SD| LIFETIME", "UK|SD| MORE 4",
      "UK|SD| PBS AMERICA", "UK|SD| PICK TV", "UK|SD| QUEST", "UK|SD| QUEST RED", "UK|SD| REALLY",
      "UK|SD| SONY MOVIES", "UK|SD| SONY CRIME 2", "UK|SD| TRUE ENTERTAINMENT", "UK|SD| TRUE MOVIES",
      "UK|SD| UNIVERSAL CHANNEL", "UK|SD| UTV ONE +1", "UK|SD| UTV ULSTER", "UK|SD| WATCH",
      "UK|SD| YANGA", "UK|SD| YESTERDAY", "UK|SD| SKY ATLANTIC", "UK|SD| SKY ARTS", "UK|SD| QVC",
      "UK|SD| SKY WITNESS", "UK|SD| QVC STYLE", "UK|SD| QVC EXTRA", "UK|SD| QVC BEAUTY", "UK|SD| JML",
      "UK|SD| TLC", "UK|SD| COMEDY CENTRAL", "UK|SD| COMEDY CENTRAL EXTRA", "UK|SD| E! ENTERTAINMENT",
      "UK|SD| BBC ENTERTAINMENT", "UK FLIX MOVIES NETFLIX", "UK FLIX MOVIES ROMANCE",
      "UK FLIX MOVIRS HORROR", "UK FLIX MOVIES DRAMA", "UK FLIX MOVIES CRIME", "UK FLIX MOVIES DOCUMENTARY",
      "UK FLIX MOVIES COMEDY", "UK FLIX MOVIES ANIMATION", "UK FLIX MOVIES ADVENTURE",
      "UK FLIX MOVIES ACTION", "UK FLIX MOVIES WESTERN", "UK FLIX MOVIES WAR",
      "UK FLIX MOVIES SYLVESTER STALLONE", "UK FLIX MOVIES NICOLAS CAGE", "UK FLIX MOVIES BRUCE WILLIS",
      "UK FLIX MOVIES JACKIE CHAN", "UK FLIX MOVIES TOM CRUISE", "UK FLIX MOVIES MATT DAMON",
      "UK FLIX MOVIES VIN DIESEL",
      // Movies FHD
      "UK|FHD| SKY CINEMA ACTION", "UK|FHD| SKY CINEMA COMEDY", "UK|FHD| SKY CINEMA DISNEY",
      "UK|FHD| SKY CINEMA FAMILY", "UK|FHD| SKY CINEMA PREMIERE", "UK|FHD| SKY CINEMA PREMIER +1",
      "UK|FHD| SKY CINEMA GREATS", "UK|FHD| SKY CINEMA SCI-FI & HORROR", "UK|FHD| SKY CINEMA SUPERHEROES",
      "UK|FHD| SKY CINEMA THRILLER", "UK|FHD| SKY CINEMA DRAMA", "UK|FHD| SKY CINEMA HITS",
      "UK|FHD| SKY CINEMA ANIMATION", "UK|FHD| TCM", "UK|FHD| AMC", "UK|FHD| FILM 4",
      // Movies SD
      "UK|SD| SKY CINEMA ACTION", "UK|SD| SKY CINEMA COMEDY", "UK|SD| SKY CINEMA DRAMA",
      "UK|SD| SKY CINEMA DISNEY", "UK|SD| SKY CINEMA FAMILY", "UK|SD| SKY CINEMA GREATS",
      "UK|SD| SKY CINEMA HITS", "UK|SD| SKY CINEMA PREMIERE", "UK|SD| SKY CINEMA PREMIER +1",
      "UK|SD| SKY CINEMA SCI-FI & HORROR", "UK|SD| SKY CINEMA SUPERHEROES", "UK|SD| SKY CINEMA THRILLER",
      "UK|SD| TCM", "UK|SD| AMC", "UK|SD| FILM 4", "UK|SD| HORROR CHANNEL", "UK|SD| MOVIES 24",
      // Music
      "UK|FHD| MTV", "UK|FHD| MTV LIVE", "UK|SD| BOX HITS", "UK|SD| CHART SHOW TV", "UK|SD| CLUBLAND",
      "UK|SD| KERRANG", "UK|SD| KISS TV", "UK|SD| MAGIC", "UK|SD| MTV BASE", "UK|SD| MTV CLASSIC",
      "UK|SD| MTV HITS", "UK|SD| MTV MUSIC", "UK|SD| MTV ONE", "UK|SD| MTV LIVE", "UK|SD| NOW 80S",
      "UK|SD| NOW MUSIC", "UK|SD| POP", "UK|SD| POP MAX", "UK|SD| THE VAULT", "UK|SD| VH1",
      "UK|SD| THE BOX", "UK|SD| 4 MUSIC", "UK|SD| TRACE URBAN", "UK|SD| TRACE VAULT",
      "UK|SD| MC MUSIC Y2K", "UK|SD| MC MUSIC TROPICALES", "UK|SD| MC MUSIC TODDLER TUNES",
      "UK|SD| MC MUSIC TODAYS COUNTRY", "UK|SD| MC MUSIC THROWBACK JAMZ", "UK|SD| MC MUSIC TEEN BEATS",
      "UK|SD| MC MUSIC ROCK", "UK|SD| MC MUSIC RAP 2K", "UK|SD| MC MUSIC RAP", "UK|SD| MC MUSIC R&B SOUL",
      "UK|SD| MC MUSIC R&B", "UK|SD| MC MUSIC POP LATINO", "UK|SD| MC MUSIC POP HITS",
      "UK|SD| MC MUSIC POP & COUNTRY", "UK|SD| MC MUSIC MEXICANA", "UK|SD| MC MUSIC METAL",
      "UK|SD| MC MUSIC KIDZ ONLY!", "UK|SD| MC MUSIC INDIE", "UK|SD| MC MUSIC HIT LIST",
      "UK|SD| MC MUSIC HIP-HOP AND R&B", "UK|SD| MC MUSIC DANCE/ EDM", "UK|SD| MC MUSIC BRITISH HITS",
      "UK|SD| MC MUSIC ALTERNATIVE", "UK|SD| MC MUSIC 90S",
      // Documentary FHD
      "UK|FHD| DISCOVERY", "UK|FHD| NAT GEO", "UK|FHD| NAT GEO WILD", "UK|FHD| ANIMAL PLANET",
      "UK|FHD| CRIME&INVESTIGATION", "UK|FHD| HISTORY", "UK|FHD| HISTORY 2", "UK|FHD| LOVE NATURE",
      "UK|FHD| PARAMOUNT NETWORK", "UK|FHD| SYFY", "UK|FHD| SMITHSONIAN CHANNEL", "UK|FHD| SKY NATURE",
      // Documentary SD
      "UK|SD| DISCOVERY", "UK|SD| DISCOVERY HISTORY", "UK|SD| DISCOVERY HOME & HEALTH",
      "UK|SD| DISCOVERY SCIENCE", "UK|SD| DISCOVERY SHED", "UK|SD| DISCOVERY TURBO", "UK|SD| NAT GEO",
      "UK|SD| NAT GEO WILD", "UK|SD| ANIMAL PLANET", "UK|SD| TRAVEL CHANNEL", "UK|SD| CRIME&INVESTIGATION",
      "UK|SD| FORCES TV", "UK|SD| HISTORY", "UK|SD| HISTORY 2", "UK|SD| HORSE AND COUNTRY",
      "UK|SD| INVESTIGATION DISCOVERY (ID)", "UK|SD| KEEP IT COUNTRY", "UK|SD| MY TV",
      "UK|SD| PARAMOUNT NETWORK", "UK|SD| SHOWCASE", "UK|SD| SYFY", "UK|SD| SKY NATURE",
      // BEIN Sports
      "UK BEIN SPORT HD", "UK BEIN SPORTS NBA HD", "UK BEIN SPORT NEWS HD", "UK BEIN SPORTS 1 HD",
      "UK BEIN SPORTS 2 HD", "UK BEIN SPORTS 3 HD", "UK BEIN SPORTS 4 HD", "UK BEIN SPORTS 5 HD",
      "UK BEIN SPORTS 6 HD", "UK BEIN SPORTS 7 HD", "UK BEIN SPORTS 8 HD", "UK BEIN SPORTS 9 HD",
      "UK BEIN SPORTS 10 HD OLYMPIC", "UK BEIN SPORTS 11 HD EN", "UK BEIN SPORTS 12 HD EN",
      "UK BEIN SPORTS 13 HD", "UK BEIN SPORTS 14 HD", "UK BEIN SPORTS 15 HD", "UK BEIN SPORTS 16 HD",
      // Sports HD
      "UK|HD| SKY SPORTS NEWS", "UK|HD| SKY SPORTS ACTION", "UK|HD| SKY SPORTS FOOTBALL",
      "UK|HD| SKY SPORTS MAIN EVENT", "UK|HD| SKY SPORTS PREMIER LEAGUE", "UK|HD| SKY SPORTS ARENA",
      "UK|HD| SKY SPORTS CRICKET", "UK|HD| SKY SPORTS F1", "UK|HD| SKY SPORTS GOLF",
      "UK|HD| BT SPORTS ESPN", "UK|HD| BT SPORTS 1", "UK|HD| BT SPORTS 2", "UK|HD| BT SPORTS 3",
      "UK|HD| CHELSEA TV (LIVE ON MATCHES)", "UK|HD| BOX NATION", "UK|HD| FOX SPORTS ASIA 1",
      "UK|HD| FOX SPORTS ASIA 2", "UK|HD| FOX SPORTS ASIA 3", "UK|HD| SUPERSPORT VARIETY 1 HD",
      "UK|HD| SUPERSPORT VARIETY 2 HD", "UK|HD| SUPERSPORT VARIETY 3 HD", "UK|HD| SUPERSPORT VARIETY 4 HD",
      "UK|HD| SUPERSPORT FOOTBALL HD", "UK|HD| SUPERSPORT PREMIER LEAGUE HD", "UK|HD| SUPERSPORT LALIGA HD",
      "UK|HD| SUPERSPORT TENNIS HD", "UK|HD| SUPERSPORT RUGBY HD", "UK|HD| SUPERSPORT CRICKET HD",
      "UK|HD| SUPERSPORT GOLF HD", "UK|HD| SUPERSPORT MOTOSPORT HD", "UK|HD| SUPERSPORT EVENTS",
      "UK|HD| SUPERSPORT PLAY", "UK|HD| SUPERSPORT BLITZ", "UK|HD| SUPERSPORT MAXIMO",
      // Sports FHD
      "UK|FHD| SKY SPORTS NEWS", "UK|FHD| SKY SPORTS ACTION", "UK|FHD| SKY SPORTS FOOTBALL",
      "UK|FHD| SKY SPORTS PREMIER LEAGUE", "UK|FHD| SKY SPORTS MAIN EVENT", "UK|FHD| SKY SPORT MIX",
      "UK|FHD| SKY SPORTS RACING", "UK|FHD| SKY SPORTS ARENA", "UK|FHD| SKY SPORTS CRICKET",
      "UK|FHD| SKY SPORTS F1", "UK|FHD| SKY SPORTS GOLF", "UK|FHD| BT SPORTS ESPN", "UK|FHD| BT SPORTS 1",
      "UK|FHD| BT SPORTS 2", "UK|FHD| BT SPORTS 3", "UK|FHD| EUROSPORTS 1", "UK|FHD| EUROSPORTS 2",
      "UK|FHD| FREE SPORTS", "UK|FHD| LFC", "UK|FHD| PREMIER SPORTS", "UK|FHD| PREMIER SPORTS 2",
      "UK|FHD| RACING UK", "UK|FHD| MUTV", "UK|FHD| CELTIC TV HD (LIVE ON MATCHES)",
      // Sports SD
      "UK|SD| SKY SPORTS NEWS", "UK|SD| SKY SPORTS ACTION", "UK|SD| SKY SPORTS FOOTBALL",
      "UK|SD| SKY SPORTS MAIN EVENT", "UK|SD| SKY SPORTS PREMIER LEAGUE", "UK|SD| SKY SPORTS RACING",
      "UK|SD| SKY SPORTS ARENA", "UK|SD| SKY SPORTS CRICKET", "UK|SD| SKY SPORTS F1",
      "UK|SD| SKY SPORT MIX", "UK|SD| SKY SPORTS GOLF", "UK|SD| BT SPORTS ESPN", "UK|SD| BT SPORTS 1",
      "UK|SD| BT SPORTS 2", "UK|SD| BT SPORTS 3", "UK|SD| BT SPORTS MOSAIC", "UK|SD| EUROSPORT 1",
      "UK|SD| EUROSPORT 2", "UK|SD| BOX NATION", "UK|SD| FREE SPORTS", "UK|SD| LFC TV", "UK|SD| MUTV",
      "UK|SD| PREMIER SPORTS", "UK|SD| PREMIER SPORTS 2",
      // Events & PPV
      "UK PPV 1 (MÖNCHENGLADBACH V SHAKHTAR DONETSK)", "UK PPV 2 (OLYMPIACOS V MANCHESTER CITY)",
      "UK PPV 3 (LENS V NANTES)", "UK PPV 4 (LIVERPOOL V ATALANTA)", "UK PPV 5 (INTER MILAN V REAL MADRID)",
      "UK PPV 6 (ATLÉTICO MADRID V LOKOMOTIV MOSCOW)", "UK|SD| RACING UK", "UK|FHD| BT SPORTS EXTRA 1",
      "UK|FHD| BT SPORTS EXTRA 2", "UK|FHD| BT SPORTS EXTRA 3", "UK|FHD| BT SPORTS EXTRA 4",
      "UK|FHD| BT SPORTS EXTRA 5 (ONLY MATCH TIME)", "UK|FHD| BT SPORTS EXTRA 6 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 1 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 2 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 3 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 4 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 5 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 6 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 7 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 8 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 9 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 10 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 11 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 13 (ONLY MATCH TIME)",
      "UKHD BBC RED BUTTON HD 12 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 14 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 15 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 16 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 17 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 18 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 19 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 20 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 21 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 22 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 23 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 24 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 25 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 26 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 27 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 28 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 29 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 30 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 31 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 32 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 33 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 34 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 35 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 36 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 37 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 38 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 39 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 40 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 41 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 42 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 43 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 44 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 45 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 46 (ONLY MATCH TIME)",
      "UK|FHD| BBC RED BUTTON HD 47 (ONLY MATCH TIME)", "UK|FHD| BBC RED BUTTON HD 48 (ONLY MATCH TIME)",
      // Ireland General HD
      "IE|HD| CORONA VIRUS INFO", "IE|HD| RTE ONE", "IE|HD| RTE TWO", "IE|HD| VIRGIN MEDIA ONE",
      "IE|HD| VIRGIN MEDIA TWO", "IE|HD| VIRGIN MEDIA THREE", "IE|HD| TG4", "IE|HD| S4C",
      "UK|HD| EIR SPORTS 1", "UK|HD| EIR SPORTS 2",
      // Ireland General SD
      "IE|SD| RTE NEWS", "IE|SD| RTE ONE", "IE|SD| RTE TWO", "IE|SD| SKY NEWS IRELAND",
      "IE|SD| RTE JUNIOR", "IE|SD| S4C", "IE|SD| TG4", "IE|SD| VIRGIN MEDIA ONE",
      "IE|SD| VIRGIN MEDIA THREE", "IE|SD| EIR SPORTS 1", "IE|SD| EIR SPORTS 2", "IE|SD| FOOD XP",
      "IE|SD| VIRGIN MEDI TWO",
      // Indian Channels in UK
      "IN|UK| STAR PLUS HD", "IN|UK| STAR PLUS", "IN|UK| STAR GOLD HD", "IN|UK| STAR GOLD",
      "IN|UK| STAR BHARAT", "IN|UK| ZEE TV", "IN|UK| ZEE CINEMA HD", "IN|UK| ZEE CINEMA",
      "IN|UK| SONY ASIA HD", "IN|UK| SONY ASIA", "IN|UK| SONY MAX HD", "IN|UK| SONY MAX",
      "IN|UK| SONY MAX 2", "IN|UK| COLORS", "IN|UK| COLORS HD", "IN|UK| SONY SAB",
      "IN|UK| COLORS RISHTEY TV", "IN|UK| COLORS CINEPLEX", "IN|UK| B4U MOVIES", "IN|UK| B4U MUSIC",
      "IN|UK| B4U PLUS", "IN|UK| ZING", "IN|UK| BRIT ASIA TV", "IN|UK| VENUS", "IN|UK| ABP NEWS",
      "IN|UK| AAJ TAK", "IN|UK| NDTV", "IN|UK| AASTHA", "IN|UK| PTC PUNJABI", "IN|UK| SIKH CHANNEL",
      "IN|UK| AKAAL CHANNEL", "IN|UK| SANGAT", "IN|UK| MATV NATIONAL", "IN|UK| REPUBLIC TV", "IN|UK| KTV"
    ]
  },
  {
    name: "Frankrijk",
    icon: "🇫🇷",
    channels: [
      // Main Channels
      "FR TF1 FHD", "FR TF1 HD", "FR TF1 +1 FHD", "FR TF1 Séries Films FHD", "FR TFX FHD", "FR TFX HD",
      "FR TMC FHD", "FR TMC HD", "FR LCI FHD", "FR LCI HD",
      "FR France 2 FHD", "FR France 2 HD", "FR France 3 FHD", "FR France 3 HD",
      "FR France 4 FHD", "FR France 4 HD", "FR France 5 FHD", "FR France 5 HD",
      "FR France Info FHD", "FR France 24 FHD", "FR France 24 HD",
      "FR Canal+ FHD", "FR Canal+ HD", "FR Canal+ UHD 4K", "FR Canal+ Cinéma FHD", "FR Canal+ Cinéma HD",
      "FR Canal+ Sport FHD", "FR CANAL+ Sport FI HD", "FR Canal+ Séries FHD", "FR Canal+ Docs FHD",
      "FR Canal+ Family FHD", "FR Canal+ Kids FHD", "FR Canal+ Décalé FHD", "FR Canal+ Grand Ecran FHD",
      "FR M6 FHD", "FR M6 HD", "FR W9 FHD", "FR W9 HD", "FR 6ter FHD", "FR Gulli FHD", "FR Gulli HD",
      "FR Paris Première FHD", "FR C8 FHD", "FR C8 HD", "FR NRJ12 FHD", "FR NRJ12 HD",
      "FR Chérie 25 FHD", "FR L'Équipe FHD", "FR BFM TV FHD", "FR BFM TV HD", "FR CNews FHD",
      "FR Arte FHD", "FR Arte HD", "FR TV5 Monde FHD", "FR RMC Découverte FHD", "FR RMC Story FHD",
      // Sports
      "FR beIN Sports 1 FHD", "FR beIN Sports 1 HD", "FR beIN Sports 2 FHD", "FR beIN Sports 2 HD",
      "FR beIN Sports 3 FHD", "FR beIN Sports 3 HD", "FR beIN Sports MAX 4 FHD", "FR beIN Sports MAX 5 FHD",
      "FR beIN Sports MAX 6 FHD", "FR beIN Sports MAX 7 FHD", "FR beIN Sports MAX 8 FHD",
      "FR beIN Sports MAX 9 FHD", "FR beIN Sports MAX 10 FHD",
      "FR RMC SPORT 1 FHD", "FR RMC SPORT 1 HD", "FR RMC SPORT 2 FHD", "FR RMC SPORT 2 HD",
      "FR RMC SPORT 3 FHD", "FR RMC SPORT 3 HD", "FR RMC SPORT 4 FHD", "FR RMC SPORT 4 HD",
      "FR DAZN 1 FHD", "FR DAZN 1 HD", "FR DAZN 2 FHD",
      "FR EUROSPORT 1 FHD", "FR EUROSPORT 1 HD", "FR EUROSPORT 2 FHD", "FR EUROSPORT 2 HD",
      "FR VOO SPORT 1 FHD", "FR Infosport+ FHD", "FR Automoto FHD", "FR Golf+ FHD",
      "FR Téléfoot FHD", "FR Téléfoot Stadium 1 FHD", "FR Téléfoot Stadium 2 FHD", "FR Téléfoot Stadium 3 FHD",
      "FR TRACE SPORTS STARS FHD", "FR TRACE SPORTS STARS HD",
      // Documentary
      "FR Discovery Channel FHD", "FR Discovery Channel HD", "FR Discovery FRANCE FHD", "FR Discovery FRANCE HD",
      "FR Discovery Family FHD", "FR Discovery FAMLIY HD", "FR Discovery sci-fi FHD", "FR Discovery Science FHD",
      "FR Investigation Discovery FHD", "FR Investigation Discovery HD",
      "FR NAT GEO FHD", "FR NAT GEO HD", "FR NAT GEO Wild FHD", "FR NAT GEO Wild HD",
      "FR ANIMAUX FHD", "FR ANIMAUX HD", "FR Crime+ Investigation FHD", "FR Crime+ Investigation HD",
      "FR Planète+ FHD", "FR Ushuaïa FHD", "FR Ushuaia HD", "FR Voyage FHD",
      "FR Histoire FHD", "FR Toute L'Histoire FHD", "FR Science & Vie TV FHD",
      // Movies & Series
      "FR OCS Max FHD", "FR OCS Max HD", "FR OCS City FHD", "FR OCS Choc FHD", "FR OCS Géants FHD", "FR OCS Pulp FHD",
      "FR Ciné+ Premier FHD", "FR Ciné+ Frisson FHD", "FR Ciné+ Émotion FHD", "FR Ciné+ Famiz FHD",
      "FR Ciné+ Club FHD", "FR Ciné+ Classic FHD", "FR Paramount Channel FHD", "FR TCM Cinéma FHD",
      "FR Action FHD", "FR Polar+ FHD", "FR Warner TV FHD", "FR Série Club FHD", "FR 13ème Rue FHD",
      "FR Syfy FHD", "FR E! FHD", "FR PLANETE+ A&E FHD",
      // Kids
      "FR Disney Channel FHD", "FR Disney Channel HD", "FR Disney Channel +1 FHD", "FR Disney Channel 1 HD",
      "FR Disney CINEMA FHD", "FR Disney CINEMAGIC FHD", "FR Disney CINEMAGIC HD",
      "FR Disney JUNIOR FHD", "FR Disney JUNIOR HD", "FR Disney XD FHD", "FR Disney XD HD",
      "FR nickelodeon FHD", "FR nickelodeon HD", "FR nickelodeon 4 Teen FHD", "FR nickelodeon Junior FHD", "FR nickelodeon Junior HD",
      "FR CARTOON NETWORK FHD", "FR CARTOON NETWORK HD", "FR Boomerang FHD", "FR Boing FHD",
      "FR TELETOON FHD", "FR TELETOON 1 HD", "FR TELETOON+ FHD", "FR Tiji FHD", "FR Piwi+ FHD",
      // Music
      "FR M6 Music FHD", "FR M6 Music HD", "FR M6 MUSIC HIT FHD", "FR MCM POP FHD", "FR MCM FHD",
      "FR MTV FHD", "FR MTV HD", "FR MTV Dance FHD", "FR MTV Dance HD", "FR MTV HITS FHD",
      "FR MTV Live FHD", "FR MTV Live HD", "FR MUSIC TV FHD", "FR MUSIC TV HD",
      "FR NRJ TV FHD", "FR NRJ TV HD", "FR NRJ 12 FHD", "FR NRJ Hits FHD", "FR NRJ Hits HD",
      "FR RFM TV MUSIC FHD", "FR RFM TV MUSIC HD",
      "FR TRACE Africa FHD", "FR TRACE Africa HD", "FR TRACE Carribean FHD", "FR TRACE Gospel FHD",
      "FR TRACE Kitoko FHD", "FR TRACE Latina FHD", "FR TRACE Mziki FHD", "FR TRACE Naija FHD",
      "FR TRACE Toca FHD", "FR TRACE URBAN FHD", "FR TRACE URBAN HD",
      "FR VH1 FHD", "FR VH1 HD", "FR VH1 CLASSIC FHD", "FR VH1 CLASSIC HD",
      "FR Mezzo FHD", "FR Mezzo Live FHD", "FR Stingray Classica FHD"
    ]
  },
  {
    name: "Spanje",
    icon: "🇪🇸",
    channels: [
      // Main National Channels
      "ES La 1 FHD", "ES La 1 HD", "ES La 2 FHD", "ES La 2 HD", "ES 24 Horas FHD", "ES 24 Horas HD",
      "ES Teledeporte FHD", "ES Teledeporte HD", "ES Clan TVE FHD", "ES Clan HD",
      "ES Antena 3 FHD", "ES Antena 3 HD", "ES laSexta FHD", "ES laSexta HD",
      "ES Neox FHD", "ES Neox HD", "ES Nova FHD", "ES Nova HD", "ES Mega FHD", "ES Mega HD",
      "ES Atreseries FHD", "ES Atreseries HD",
      "ES Telecinco FHD", "ES Telecinco HD", "ES Cuatro FHD", "ES Cuatro HD",
      "ES FDF FHD", "ES FDF HD", "ES Energy FHD", "ES Energy HD",
      "ES Divinity FHD", "ES Divinity HD", "ES Be Mad FHD", "ES Be Mad HD",
      // Sports
      "ES DAZN FHD", "ES DAZN HD", "ES ESPN FHD", "ES ESPN HD",
      "ES EUROSPORT 1 FHD", "ES EUROSPORT 1 HD", "ES EUROSPORT 2 FHD", "ES EUROSPORT 2 HD", "ES EUROSPORT FHD",
      "ES Movistar+ FHD", "ES Movistar+ HD", "ES Movistar+ Lite FHD",
      "ES M+ LaLiga FHD", "ES M+ LaLiga HD", "ES M+ LaLiga UHD",
      "ES M+ LaLiga 2 FHD", "ES M+ LaLiga 3 FHD", "ES M+ LaLiga 4 FHD", "ES M+ LaLiga 5 FHD",
      "ES M+ LaLiga por M+ FHD", "ES LaLiga TV Bar FHD",
      "ES M+ Liga de Campeones FHD", "ES M+ Liga de Campeones HD",
      "ES M+ Liga de Campeones 2 FHD", "ES M+ Liga de Campeones 3 FHD", "ES M+ Liga de Campeones 4 FHD",
      "ES M+ Deportes FHD", "ES M+ Deportes HD", "ES M+ Deportes 1 FHD", "ES M+ Deportes 2 FHD",
      "ES M+ Golf FHD", "ES M+ F1 FHD", "ES M+ MotoGP FHD", "ES M+ Ellas FHD",
      "ES DAZN 1 FHD", "ES DAZN 1 HD", "ES DAZN 2 FHD", "ES DAZN 2 HD",
      "ES DAZN 3 FHD", "ES DAZN 4 FHD", "ES DAZN F1 FHD",
      "ES Gol FHD", "ES Gol HD", "ES Real Madrid TV FHD", "ES Barça TV FHD", "ES Esport3 FHD",
      // Documentary
      "ES Discovery Channel FHD", "ES Discovery Channel HD", "ES Discovery MAX FHD",
      "ES DMAX FHD", "ES DMAX HD", "ES NAT GEO FHD", "ES NAT GEO HD",
      "ES NAT GEO Wild FHD", "ES NAT GEO Wild HD",
      "ES CANAL DE HISTORIA FHD", "ES Canal Historia FHD", "ES Historia FHD", "ES Historia HD",
      "ES CAZA & PESCA FHD", "ES Crime+ Investigation FHD", "ES Crime+ Investigation HD",
      "ES Investigation Discovery FHD", "ES Investigation Discovery HD", "ES Odisea FHD",
      // Movies & Series
      "ES M+ Cine FHD", "ES M+ Cine HD", "ES M+ Estrenos FHD", "ES M+ Acción FHD",
      "ES M+ Comedia FHD", "ES M+ Drama FHD", "ES M+ Classics FHD",
      "ES M+ Disney FHD", "ES M+ Series FHD", "ES M+ Seriesmania FHD",
      "ES Canal+ Series FHD", "ES AXN FHD", "ES AXN HD", "ES AXN White FHD",
      "ES Fox FHD", "ES Fox HD", "ES Fox Life FHD", "ES FOX Life HD",
      "ES TNT FHD", "ES TNT HD", "ES Calle 13 FHD", "ES Comedy Central FHD",
      "ES Paramount Network FHD", "ES SyFy FHD", "ES Cosmo FHD",
      "ES Hollywood FHD", "ES Somos FHD", "ES TCM FHD", "ES AMC FHD",
      "ES A&E FHD", "ES A&E HD", "ES Canal Cocina FHD", "ES Decasa FHD", "ES Viajar FHD",
      // Kids
      "ES Disney Channel FHD", "ES Disney Channel HD", "ES MOVISTAR Disney FHD",
      "ES Disney+ FHD", "ES MOVISTAR Disney+ FHD",
      "ES Disney JR FHD", "ES Disney Jœnior FHD", "ES Disney XD FHD", "ES Disney XD HD",
      "ES nickelodeon FHD", "ES nickelodeon HD", "ES nickelodeon Iberia FHD",
      "ES Nick Junior FHD", "ES Nick Junior HD",
      "ES Cartoon Network FHD", "ES Cartoon Network HD", "ES Boomerang FHD", "ES Boomerang HD",
      "ES Boing FHD", "ES Boing HD", "ES Baby TV FHD", "ES Baby TV HD", "ES Clan FHD",
      // Music
      "ES MTV FHD", "ES MTV HD", "ES MTV Hits FHD", "ES MTV ROCKS FHD",
      "ES Sol Musica FHD", "ES Sol Musica HD", "ES VH1 FHD", "ES VH1 HD",
      "ES Hit TV FHD", "ES Mezzo Live FHD",
      // Regional
      "ES TV3 FHD", "ES TV3 HD", "ES 3/24 FHD", "ES 33 FHD", "ES Super3 FHD",
      "ES ETB1 FHD", "ES ETB1 HD", "ES ETB2 FHD", "ES ETB2 HD",
      "ES Canal Sur FHD", "ES Canal Sur HD", "ES Aragón TV FHD", "ES IB3 FHD",
      "ES TPA FHD", "ES TeleMadrid FHD", "ES 7RM FHD", "ES À Punt FHD", "ES CMM FHD"
    ]
  },
  {
    name: "Italië",
    icon: "🇮🇹",
    channels: [
      "IT Rai 1 HD", "IT Rai 1 FHD", "IT Rai 2 HD", "IT Rai 2 FHD", "IT Rai 3 HD", "IT Rai 3 FHD",
      "IT Rai 4 HD", "IT Rai 5 HD", "IT Rai Movie HD", "IT Rai Premium HD", "IT Rai News 24 HD",
      "IT Rai Storia HD", "IT Rai Scuola HD", "IT Rai Sport+ HD", "IT Rai Gulp HD", "IT Rai YoYo HD",
      "IT Canale 5 HD", "IT Canale 5 FHD", "IT Italia 1 HD", "IT Italia 1 FHD", "IT Rete 4 HD",
      "IT Italia 2 HD", "IT Cine34 HD", "IT Focus HD", "IT 20 HD", "IT La5 HD", "IT Mediaset Extra HD",
      "IT TGCOM24 HD", "IT Top Crime HD", "IT Iris HD", "IT TGCom24 HD", "IT Boing HD", "IT Cartoonito HD",
      "IT La7 HD", "IT La7 FHD", "IT La7d HD", "IT TV8 HD", "IT Nove HD", "IT Cielo HD",
      "IT Sky Sport Uno HD", "IT Sky Sport Uno FHD", "IT Sky Sport Calcio HD", "IT Sky Sport Calcio FHD",
      "IT Sky Sport Arena HD", "IT Sky Sport 24 HD", "IT Sky Sport Football HD", "IT Sky Sport Tennis HD",
      "IT Sky Sport NBA HD", "IT Sky Sport F1 HD", "IT Sky Sport MotoGP HD", "IT Sky Sport Golf HD",
      "IT Sky Sport Action HD", "IT Sky Sport Max HD", "IT Sky Sport 251 HD", "IT Sky Sport 252 HD",
      "IT DAZN 1 IT HD", "IT DAZN 1 IT FHD", "IT DAZN 2 IT HD", "IT DAZN 3 IT HD", "IT DAZN 4 IT HD",
      "IT Eurosport 1 IT HD", "IT Eurosport 2 IT HD", "IT Sportitalia HD", "IT Sportitalia Solo Calcio HD",
      "IT Inter TV HD", "IT Milan TV HD", "IT Juventus TV HD", "IT Lazio Style HD", "IT Roma TV HD",
      "IT Sky Cinema Uno HD", "IT Sky Cinema Uno FHD", "IT Sky Cinema Uno +24 HD", "IT Sky Cinema Due HD",
      "IT Sky Cinema Collection HD", "IT Sky Cinema Family HD", "IT Sky Cinema Action HD",
      "IT Sky Cinema Romance HD", "IT Sky Cinema Drama HD", "IT Sky Cinema Comedy HD", "IT Sky Cinema Suspense HD",
      "IT Premium Cinema 1 HD", "IT Premium Cinema 2 HD", "IT Premium Cinema 3 HD", "IT Premium Action HD",
      "IT Sky Atlantic HD", "IT Sky Atlantic FHD", "IT Sky Uno HD", "IT Sky Uno FHD", "IT Sky Serie HD",
      "IT Sky Investigation HD", "IT Sky Documentaries HD", "IT Sky Nature HD", "IT Sky Arte HD",
      "IT Fox HD", "IT Fox Life HD", "IT Fox Crime HD", "IT National Geographic IT HD",
      "IT Nat Geo Wild IT HD", "IT Discovery Channel IT HD", "IT Discovery Science IT HD",
      "IT Real Time HD", "IT Food Network IT HD", "IT DMAX IT HD", "IT Giallo HD", "IT Focus HD",
      "IT History IT HD", "IT Crime+Investigation IT HD", "IT Blaze HD", "IT K2 HD", "IT Frisbee HD",
      "IT Nickelodeon IT HD", "IT Nick Jr IT HD", "IT Disney Channel IT HD", "IT Disney Junior IT HD",
      "IT Disney XD IT HD", "IT Cartoon Network IT HD", "IT Boomerang IT HD", "IT Laeffe HD",
      "IT MTV IT HD", "IT MTV Music IT HD", "IT Comedy Central IT HD", "IT Paramount Network IT HD",
      "IT VH1 IT HD", "IT Deejay TV HD", "IT Radio Italia TV HD", "IT RTL 102.5 TV HD"
    ]
  },
  {
    name: "Portugal",
    icon: "🇵🇹",
    channels: [
      "PT RTP 1 HD", "PT RTP 1 FHD", "PT RTP 2 HD", "PT RTP 3 HD", "PT RTP Memória HD",
      "PT RTP Internacional HD", "PT RTP África HD", "PT RTP Madeira HD", "PT RTP Açores HD",
      "PT SIC HD", "PT SIC FHD", "PT SIC Notícias HD", "PT SIC Mulher HD", "PT SIC Radical HD",
      "PT SIC Caras HD", "PT SIC Internacional HD", "PT TVI HD", "PT TVI FHD", "PT TVI 24 HD",
      "PT TVI Reality HD", "PT TVI Ficção HD", "PT TVI Africa HD", "PT TVI Internacional HD",
      "PT CMTV HD", "PT CMTV FHD", "PT CNN Portugal HD", "PT Correio da Manhã HD",
      "PT Sport TV 1 HD", "PT Sport TV 1 FHD", "PT Sport TV 2 HD", "PT Sport TV 2 FHD",
      "PT Sport TV 3 HD", "PT Sport TV 3 FHD", "PT Sport TV 4 HD", "PT Sport TV 4 FHD",
      "PT Sport TV 5 HD", "PT Sport TV 5 FHD", "PT Sport TV 6 HD", "PT Sport TV+ HD",
      "PT Benfica TV HD", "PT Benfica TV FHD", "PT Sporting TV HD", "PT Porto Canal HD",
      "PT Eleven Sports 1 PT HD", "PT Eleven Sports 2 PT HD", "PT Eleven Sports 3 PT HD",
      "PT Eleven Sports 4 PT HD", "PT Eleven Sports 5 PT HD", "PT Eleven Sports 6 PT HD",
      "PT Eurosport 1 PT HD", "PT Eurosport 2 PT HD", "PT Golf TV HD", "PT Motorvision TV HD",
      "PT TVCine Top HD", "PT TVCine Edition HD", "PT TVCine Action HD", "PT TVCine Emotion HD",
      "PT TVSéries HD", "PT AXN PT HD", "PT AXN White PT HD", "PT AXN Black PT HD",
      "PT Fox PT HD", "PT Fox Life PT HD", "PT Fox Crime PT HD", "PT Fox Comedy PT HD",
      "PT Fox Movies PT HD", "PT AMC PT HD", "PT Hollywood PT HD", "PT Cinemundo PT HD",
      "PT Canal+ Portugal HD", "PT Canal Panda HD", "PT Biggs HD", "PT SIC K HD",
      "PT National Geographic PT HD", "PT Nat Geo Wild PT HD", "PT Discovery Channel PT HD",
      "PT Discovery Science PT HD", "PT TLC PT HD", "PT Travel Channel PT HD", "PT History PT HD",
      "PT Crime+Investigation PT HD", "PT ID PT HD", "PT Odisseia PT HD", "PT 24 Kitchen PT HD",
      "PT Disney Channel PT HD", "PT Disney Junior PT HD", "PT Nickelodeon PT HD", "PT Nick Jr PT HD",
      "PT Cartoon Network PT HD", "PT Boomerang PT HD", "PT JimJam PT HD", "PT Baby TV PT HD",
      "PT MTV PT HD", "PT VH1 PT HD", "PT MCM PT HD", "PT Afro Music Channel HD",
      "PT ARTV HD", "PT Parlamento HD", "PT Globo PT HD", "PT Record PT HD", "PT SBT PT HD"
    ]
  },
  {
    name: "Polen",
    icon: "🇵🇱",
    channels: [
      "PL TVP 1 HD", "PL TVP 1 FHD", "PL TVP 2 HD", "PL TVP 2 FHD", "PL TVP 3 HD",
      "PL TVP Info HD", "PL TVP Sport HD", "PL TVP Sport FHD", "PL TVP Historia HD",
      "PL TVP Kultura HD", "PL TVP Seriale HD", "PL TVP Polonia HD", "PL TVP ABC HD",
      "PL TVN HD", "PL TVN FHD", "PL TVN 7 HD", "PL TVN 24 HD", "PL TVN 24 BiS HD",
      "PL TVN Turbo HD", "PL TVN Style HD", "PL TVN Fabuła HD", "PL TTV HD", "PL Metro HD",
      "PL Polsat HD", "PL Polsat FHD", "PL Polsat 2 HD", "PL Polsat News HD", "PL Polsat Sport HD",
      "PL Polsat Sport Extra HD", "PL Polsat Sport News HD", "PL Polsat Sport Fight HD",
      "PL Polsat Sport Premium 1 HD", "PL Polsat Sport Premium 2 HD", "PL Polsat Sport Premium 3 HD",
      "PL Polsat Sport Premium 4 HD", "PL Polsat Sport Premium 5 HD", "PL Polsat Sport Premium 6 HD",
      "PL Polsat Film HD", "PL Polsat Seriale HD", "PL Polsat Comedy Central HD", "PL Polsat Games HD",
      "PL Polsat Cafe HD", "PL Polsat Doku HD", "PL Polsat Reality HD", "PL Polsat Music HD",
      "PL TV4 HD", "PL TV6 HD", "PL Puls HD", "PL Puls 2 HD", "PL Super Polsat HD",
      "PL Canal+ 1 PL HD", "PL Canal+ 1 PL FHD", "PL Canal+ Sport PL HD", "PL Canal+ Sport 2 PL HD",
      "PL Canal+ Sport 3 PL HD", "PL Canal+ Sport 4 PL HD", "PL Canal+ Sport 5 PL HD",
      "PL Canal+ Premium PL HD", "PL Canal+ Film PL HD", "PL Canal+ Seriale PL HD",
      "PL Canal+ Family PL HD", "PL Canal+ Discovery PL HD", "PL Canal+ Dokument PL HD",
      "PL Eleven Sports 1 PL HD", "PL Eleven Sports 2 PL HD", "PL Eleven Sports 3 PL HD",
      "PL Eleven Sports 4 PL HD", "PL Eurosport 1 PL HD", "PL Eurosport 2 PL HD",
      "PL nSport+ HD", "PL Sportklub HD", "PL Extreme Sports HD", "PL Golf Channel PL HD",
      "PL HBO PL HD", "PL HBO 2 PL HD", "PL HBO 3 PL HD", "PL Cinemax PL HD", "PL Cinemax 2 PL HD",
      "PL AXN PL HD", "PL AXN Spin PL HD", "PL AXN Black PL HD", "PL AXN White PL HD",
      "PL Fox PL HD", "PL Fox Comedy PL HD", "PL AMC PL HD", "PL Paramount Network PL HD",
      "PL Universal Channel PL HD", "PL Sci Fi PL HD", "PL 13 Ulica PL HD", "PL TNT PL HD",
      "PL Ale Kino+ PL HD", "PL Kino Polska HD", "PL Stopklatka HD", "PL Kino TV HD",
      "PL National Geographic PL HD", "PL Nat Geo Wild PL HD", "PL Nat Geo People PL HD",
      "PL Discovery Channel PL HD", "PL Discovery Science PL HD", "PL Discovery Historia PL HD",
      "PL TLC PL HD", "PL Travel Channel PL HD", "PL Animal Planet PL HD", "PL Discovery Life PL HD",
      "PL History PL HD", "PL Historia PL HD", "PL Viasat History PL HD", "PL Viasat Nature PL HD",
      "PL Viasat Explore PL HD", "PL DTX PL HD", "PL Crime+Investigation PL HD", "PL ID PL HD",
      "PL Nickelodeon PL HD", "PL Nick Jr PL HD", "PL Disney Channel PL HD", "PL Disney XD PL HD",
      "PL Disney Junior PL HD", "PL Cartoon Network PL HD", "PL Boomerang PL HD", "PL JimJam PL HD",
      "PL Baby TV PL HD", "PL MiniMini+ PL HD", "PL Teletoon+ PL HD", "PL Da Vinci PL HD",
      "PL MTV PL HD", "PL MTV Hits PL HD", "PL VH1 PL HD", "PL Eska TV HD", "PL Polo TV HD"
    ]
  },
  {
    name: "Griekenland",
    icon: "🇬🇷",
    channels: [
    // General
  "Corona Virus Info",
  "Ert 1 HD",
  "Ert 1",
  "Ert 2 HD",
  "Ert 2",
  "Ert 3 HD",
  "Ert 3",
  "Alpha HD",
  "Skai HD",
  "Open Beyond HD",
  "Mega HD",
  "Start TV",
  "Creta TV",
  "Kontra TV",
  "Makedonia TV HD",
  "Ant 1 HD",
  "Star HD",
  "Epsilon",
  "Creta TV HD",
  "Ant 1",
  "Alpha",
  "Action 24 HD",
  "4E",
  "TV1 Syros",
  "TV 100",
  "Sigma TV CY",
  "Rise TV",
  "Rik Sat CY",
  "Net TV Toronto",
  "Messinia TV",
  "Lychnos",
  "Kphtn TV",
  "Kanali Voulis",
  "Ionian TV",
  "High TV",
  "Axeloos TV",
  "Attica TV",
  "Vouli Tileorasi",
  "Kriti TV",
  "One HD",
  "Macedonia HD",
  "4E Eklisias",

  // News
  "CNN",
  "Ert World",
  "Euronews Greek HD",

  // Kids
  "Nickelodeon HD",
  "Baby TV",
  "Disney Channel",
  "Disney Junior",
  "Disney XD",
  "Smile",
  "Star Kentrikis Elladas",

  // Movies
  "Action 24",
  "Nova Cinema 1 HD",
  "Nova Cinema 2 HD",
  "Nova Cinema 3 HD",
  "Nova Cinema 4 HD",
  "Cosmote Cinema 1 HD",
  "Cosmote Cinema 2 HD",
  "Cosmote Cinema 3 HD",
  "Cosmote Cinema One HD",
  "Cosmote Series HD",
  "Nova Premiere 1 HD",
  "Nova Premiere 2 HD",
  "Nova Premiere 3 HD",
  "Nova Premiere 4 HD",
  "Nova Cinema Action HD",
  "Village Cinema HD",

  // Documentary
  "National Geographic HD",
  "National Geographic Wild HD",
  "Discovery Channel",
  "Discovery ID",
  "Discovery Science",
  "Discovery Showcase",
  "Discovery Turbo Xtra",
  "Crime Investigation",
  "Animal Planet HD",
  "Outdoor Channel HD",
  "Travel Channel HD",
  "Fine Living",
  "Fine Living HD",
  "Viasat Explore",
  "Viasat History",
  "Viasat Nature",
  "Cosmote History HD",
  "Luxe TV HD",
  "BBC Earth HD",

  // Entertainment
  "E! Entertainment HD",
  "Fox HD",
  "Fox Life HD",
  "TCM HD",
  "CBS Reality",
  "Fashion TV",
  "Channel 9",
  "Nautical Channel HD",
  "Food Network HD",

  // Music
  "Madgreekz HD",
  "MTV Live HD",
  "Mad",
  "Mad Hits HD",
  "NRG TV",
  "Body In Balance",
  "Cannali Music",
  "VH1",
  "Aigaio TV Music",
  "Stingray CMUSIC",
  "Stingray iConcerts",

  // Sports
  "Nova Sport 1 HD",
  "Nova Sport 2 HD",
  "Nova Sport 3 HD",
  "Nova Sport 4 HD",
  "Nova Sport 5 HD",
  "Nova Sports 24 HD",
  "Ert Sport",
  "Ert Sport HD",
  "Edge Sport HD",
  "Motorvision Channel HD",
  "Cosmote Sport 1 HD",
  "Cosmote Sport 2 HD",
  "Cosmote Sport 3 HD",
  "Cosmote Sport 4 HD",
  "Cosmote Sport 5 HD",
  "Cosmote Sport 6 HD",
  "Cosmote Sport 7 HD",
  "Cosmote Sport 8 HD",
  "Cosmote Sport 9 HD",
  "Cosmote Sport Highlights HD",
  "Paok TV"
  
    ]
  },
  {
    name: "Zweden",
    icon: "🇸🇪",
    channels: [
      // General
  "Corona Virus Info",
  "Svt 1 Hd",
  "Svt 2 Hd",
  "Tv3 Hd",
  "Tv4 Hd",
  "Kanal 5 Hd",
  "Tv 6 Hd",
  "Sjuan Hd",
  "Tv8 Hd",
  "Kanal 9 Hd",
  "Tv 10 Hd",
  "Kanal 11 Hd",
  "Tv 12 Hd",
  "Tv Malmö",
  "Tv4 Fakta Hd",
  "Tv 4 Guld Hd",
  "Tv 4 Film Hd",
  "Barnekanalen",
  "H2 Hd",
  "Svt Kunskapskanalen Hd",
  "Expressen Tv Hd",
  "Godare Hd",
  "Svt1 Dalarna",
  "Svt1 Värmland",
  "Svt1 Örebro",
  "Svt1 Väst",
  "Svt1 Öst",
  "Svt2 Dalarna",
  "Svt2 Värmland",
  "Svt2 Örebro",
  "Svt2 Väst",
  "Svt2 Öst",

  // Entertainment
  "Max Hd",
  "Fox Tv Hd",
  "Tlc Hd",
  "Atg Live",
  "Comedy Central",
  "Sf-Kanalen [Multi-Sub]",
  "Svt24/B Hd",
  "Viasat Explorer Fhd",
  "Fuel Tv Hd",

  // Documentary
  "Bbc Brit Fhd",
  "Bbc Earth Hd",
  "Discovery Hd",
  "Discovery Science Hd",
  "Nat Geo Hd",
  "National Geographic Wild Hd",
  "Viasat Nature",
  "Viasat History",
  "Id Investigation Discovery",
  "History Hd",
  "Animal Planet Hd",
  "Dagens Industri Tv Hd",
  "Axess",
  "Travel Channel",
  "Outdoor Channel",

  // Kids
  "Disney Channel Hd",
  "Disney Junior Hd",
  "Disney Xd Hd",
  "Boomerang Hd",
  "Nick Toons",
  "Nick Jr Hd",
  "Nickelodeon Hd",
  "Cartoon Network Hd",

  // Movies
  "Viasat Film Action",
  "Viasat Film Familly",
  "Viasat Film Hits",
  "Viasat Film Premiera",
  "Viasat Series",
  "C More Live 2 Hd",
  "C More Live 3 Hd",
  "C More Live 4 Hd",
  "C More Live 5 Hd",
  "C More Live Hd",
  "C More First Hd",
  "C More Hits Hd",
  "C More Series Hd",
  "C More Stars Hd",
  "Movie Time Swedish",
  "Movie Time Marvel",
  "Movie Time Imdb",
  "Movie Time 007",
  "Movie Time Star Wars",
  "Movie Time Comedy",

  // Music
  "Mtv Hd",
  "Trace Urban Hd",

  // Sports
  "C More Fotboll Hd",
  "Viasat Sport Extra Hd",
  "C More Golf Fhd",
  "C More Hockey Hd",
  "Eurosport 1 Uhd",
  "Eurosport 2 Uhd",
  "Viasat Fotboll Hd",
  "Viasat Golf",
  "Viasat Hockey Hd",
  "Viasat Motor Hd",
  "Viasat Sport Hd",
  "Viasat Sport Premium Hd",
  "Viasat Ultra Hd",
  "Sport Kanalen Hd",
  "Strive Sport Sweden Hd",
  "Tv3 Sport Hd",
  "Sport Expressen Hd (Live During Event Only)",
  "Sport Expressen Fhd (Live During Event Only)",
  "D-Play Extra 1",
  "D-Play Extra 2",
  "D-Play Extra 3",
  "D-Play Extra 4",
  "D-Play Extra 5",
  "D-Play Extra 6",
  "D-Play Extra 7",
  "D-Play Extra 8"]
  },
  {
    name: "Noorwegen",
    icon: "🇳🇴",
    channels: [
      "Corona Virus Info",
  "Nrk 1 Hd",
  "Nrk 1 Hd (Backup)",
  "Nrk 2 Hd",
  "Nrk 3/Super Hd",
  "Stortinget Hd",
  "Tv Norge Hd",
  "Tv Norge Fhd",
  "Tv Visjon Norge Fhd",
  "Tv2 Livsstil Hd",
  "Tv2 Norge",
  "Tv2 Norge Hd",
  "Tv2 Nyhetskanalen Fhd",
  "Tv2 Zebra Hd",
  "Tv2 Zebra Fhd",
  "Tv3 Fhd",
  "Tv6",
  "Viasat 4",
  "Viasat 4 Fhd",
  "Vox Fhd",
  "Kanal 10",
  "Norway Live",
  "Tlc Fhd",
  "C More First Fhd",
  "C More Hits Fhd",
  "C More Series Fhd",
  "C More Stars Fhd",
  "Viasat Series Fhd",
  "Comedy Central",
  "Fem Hd",
  "Fox",
  "Fox Fhd",
  "Matkanalen",
  "Max Hd",
  "Max Fhd",
  "Sf-Kanalen",
  "Bbc Brit Fhd",
  "Bbc Earth Hd",
  "Animal Planet Fhd",
  "Discovery Channel Fhd",
  "Discovery Science",
  "Discovery World",
  "H2 Fhd",
  "History Fhd",
  "National Geographic Fhd",
  "National Geographic Wild Hd",
  "Viasat Nature",
  "Viasat History",
  "Viasat Explorer",
  "Disney Channel",
  "Disney Xd",
  "Boomerang",
  "Nickelodeon",
  "Nicktoons",
  "Mtv Hd",
  "Tv 2 Sport 1 Norway",
  "Tv 2 Sport 2 Norway",
  "Tv2 Sport Premium 2 Hd Vip",
  "Tv2 Sport Premium Hd Vip",
  "Tv2 Sportkanalen Hd",
  "Viasport Plus Hd Vip",
  "Viasat Golf Hd",
  "Viasat Hockey Hd",
  "Eurosport 1 Hd",
  "Eurosport 2 Fhd",
  "Eurosport N Fhd",
  "Eurosport Pluss 1 Hd",
  "Eurosport Pluss 2 Hd",
  "Eurosport Pluss 3 Hd",
  "Eurosport Pluss 4 Hd",
  "Eurosport Pluss 5 Hd",
  "Eurosport Pluss 6 Hd",
  "Eurosport Pluss 7 Hd",
  "Eurosport Pluss 8 Hd",
  "Eurosport Pluss 9 Hd",
  "Eurosport Pluss 10 Hd",
  "Eurosport Pluss 11 Hd",
  "Eurosport Pluss 12 Hd",
  "Viasat Ultra Uhd",
  "Viasat Ultra Hd",
  "Viasport 1 Norge Hd",
  "Viasport 2 Norge Hd",
  "Viasport 3 Norge Hd",
  "Rikstoto Direkte Hd"
 ]
  },
  {
    name: "Denemarken",
    icon: "🇩🇰",
    channels: [
      // General
      "DK CORONA VIRUS INFO", "DK DR1", "DK DR2", "DK TV2 NEWS", "DK TV2 CHARLIE",
      "DK TV 2 FRI", "DK TV2 LORRY DANMARK", "DK TV2 ZULU", "DK TV2", "DK TV3",
      "DK TV3+", "DK TV3 PULS", "DK DANSKE KLASSIKKER 1", "DK DANSKE KLASSIKKER 2",
      "DK DANSKE KLASSIKKER 3", "DK DANSKE KLASSIKKER 4", "DK DANSKE KLASSIKKER 5",
      "DK DR RAMASJANG", "DK XEE",
      // Entertainment
      "DK TLC", "DK 6 EREN", "DK CANAL 9", "DK DK4", "DK KANAL 4", "DK KANAL 5",
      "DK VIASAT EXPLORE", "DK TV3 MAX",
      // Documentary
      "DK BBC BRITH", "DK BBC EARTH", "DK DISCOVERY CHANNEL", "DK DISCOVERY SCIENCE",
      "DK VIASAT HISTORY", "DK VIASAT NATURE", "DK ANIMAL PLANET", "DK NAT GEO WILD",
      "DK NATIONAL GEOGRAPHIC", "DK INVESTIGATION DISCOVERY",
      // Kids
      "DK DISNEY CHANNEL DANMARK", "DK DISNEY JR DANMARK", "DK DISNEY XD", "DK BOOMERANG",
      "DK NICK JR", "DK NICKELODEON HD", "DK CARTOON NETWORK", "DK MOVIE TIME TOM AND JERRY HD",
      // Movies
      "DK C MORE FIRST", "DK C MORE HITS HD (DK)", "DK C MORE SERIES (DK)", "DK C MORE STARS HD",
      "DK VIASAT FILM ACTION", "DK VIASAT FILM FAMILLY", "DK VIASAT FILM HITS",
      "DK VIASAT FILM PREMIERA", "DK VIASAT SERIES", "DK PARAMOUNT NETWORK",
      "DK MOVIE TIME 1 HD", "DK MOVIE TIME 2 HD", "DK MOVIE TIME 3 HD", "DK MOVIE TIME 4 HD",
      "DK MOVIE TIME 5 HD", "DK MOVIE TIME 6 HD", "DK MOVIE TIME 7 HD", "DK MOVIE TIME 8 HD",
      "DK MOVIE TIME 9 HD", "DK MOVIE TIME 10 HD", "DK MOVIE TIME MARVEL", "DK MOVIE TIME PREMIERA HD",
      // Music
      "DK MTV", "DK VH1 DANMARK",
      // Sports
      "DK EUROSPORT 1", "DK EUROSPORT 2", "DK DANTOTO RACING LIVE", "DK TV2 SPORT",
      "DK TV2 SPORT X", "DK TV3 SPORT 1", "DK VIASAT ULTRA HD", "DK VIASAT ULTRA UHD",
      "DK VIASAT GOLF"
    ]
  },
  {
    name: "Finland",
    icon: "🇫🇮",
    channels: [
      "Corona Virus Info", "Yle Tv Fem", "Yle Tv1 Hd", "Yle Tv2 Hd", "Yle Teema & Fem Hd", "Sf-Kanalen [Multi-Sub]", "Liv", "Nelonen", "Sub", "National Geographic Hd", "Discovery Channel", "Viasat Explorer", "Viasat History", "Disney Channel", "Nick Jr. Nordic", "C More First Fhd", "C More Hits Hd", "C More Juniori", "C More Max Hd", "C More Max Fhd", "Mtv3 Hd", "Jim", "Eurosport 1 Finland Hd", "Eurosport 1 Finland Fhd", "C More Sport 1 Hd", "C More Sport 1 Fhd", "C More Sport 2 Hd", "C More Sport 2 Fhd", "Viasat Sport Premium Hd", "Viasat Hockey Hd"]
  },
  {
    name: "Oostenrijk",
    icon: "🇦🇹",
    channels: [
      "Corona Virus Info", "Atv Hd", "Atv 2", "Orf 1 Hd", "Orf 2n Hd", "Orf 3 Hd", "Orf Sport+ Hd", "Puls 4 Hd", "Puls 24 Hd Austria", "Servus Tv Hd", "Orf2w Hd", "Melodie Tv", "Sky Sport Austria Hd", "Sky Sport Austria 1 Hd", "Sky Sport Austria 2 Hd", "Sky Sport Austria 3 Hd", "Sky Sport Austria 4 Hd", "Orf Sport Hd"]
  },
  {
    name: "Zwitserland",
    icon: "🇨🇭",
    channels: [
     "Corona Virus Info", "Rsi La 1 HD", "Rsi La 2 HD", "Srf Info HD", "Srf Zwei HD", "Srf 1 HD", "Rts Un HD", "Rts Deux HD", "Plus 8 HD", "3+ HD", "4+ HD", "5+ HD", "Tv 24 HD", "Tv 25 HD", "Teleclub Action HD", "Teleclub Cinema HD", "Teleclub Zoom HD", "Teleclub Emotion HD", "Teleclub Sport 1 HD", "Teleclub Sport 2 HD", "My Sports HD", "My Sports 1 HD/Sky 1", "My Sports 2 HD/Sky 2", "My Sports 3 HD/Sky 3", "My Sports 4 HD/Sky 4", "My Sports 5 HD/Sky 5", "My Sports 6 HD/Sky 6", "My Sports 7 HD/Sky 7", "My Sports 8 HD/Sky 8", "My Sports 9 HD/Sky 9"]
  },
  {
    name: "Roemenië",
    icon: "🇷🇴",
    channels: [
      // Romania
  "Corona Virus Info",
  "TVR 1",
  "TVR 2",
  "TVR 3",
  "TVR HD",
  "Romania TV",
  "Antena 1",
  "Antena 1 HD",
  "Antena 3",
  "Antena 3 HD",
  "Antena Stars",
  "Antena Stars HD",
  "Pro TV HD",
  "Pro TV",
  "Pro X",
  "Pro 2",
  "Pro 2 FHD",
  "Digi World HD",
  "Digi Life",
  "Digi Film",
  "Digi 24 HD",
  "AXN White",
  "AXN Romania",
  "AXN Black",
  "B1 TV",
  "DTX",
  "Favorit TV",
  "Happy Channel HD",
  "HBO Romania",
  "HBO HD RO",
  "HBO 2",
  "HBO 3 RO",
  "HBO 3",
  "Hora TV",
  "JimJam",
  "Kanal D",
  "Kiss TV",
  "Look Plus HD",
  "Lookplus",
  "National TV",
  "Prima TV RO",
  "Realitatea TV",
  "Taraf",
  "TNT RO",
  "NGRO",
  "National 24",
  "Fine Living",
  "Etno",
  "Duna HD",
  "Docubox",
  "Diva",
  "DaVinci Learning",
  "Travel Channel HD",
  "TV Paprika",
  "Zu TV",
  "U TV",
  "TV 1000",
  "TV 1000 HD",
  "Speranta TV",
  "TLC",
  "UTV HD",
  "Cromtel",
  "Sundance TV FHD [Multi-Sub]",

  // Kids
  "Boomerang",
  "Cartoon",
  "Cartoon Network",
  "Disney Channel",
  "Disney Jr",
  "Nickelodeon",
  "Disney RO",
  "Minimax",

  // Cinema
  "Cinemax 2",
  "Cinemax",
  "Filmbox Premium",
  "Filmbox Extra HD",
  "Filmbox",
  "Film Now",
  "Film Cafe",
  "Pro Gold",
  "Pro Cinema",
  "Megamax",
  "Cinemaraton",
  "CBS Reality",
  "Bollywood TV",
  "AMC",
  "Agro TV",

  // Discovery
  "Nat Geo Graphic RO",
  "Nat Geo Wild HD",
  "Nat Geo Wild",
  "Nat Geo Graphic HD",
  "Investigation Discovery",
  "Discovery Channel",
  "Discovery HD Showcase",
  "Discovery RO",
  "Discovery Science",
  "Animal Planet HD",
  "Animal Planet",
  "Digi Animal World",
  "Viasat Nature",
  "Viasat History",
  "Viasat Explorer",
  "Viasat Explore",
  "History",
  "History HD",
  "Travel Channel",
  "Fishing & Hunting",

  // Music
  "Music Channel",
  "MTV Rocks",
  "MTV Hits",
  "MTV Europe",
  "MTV Dance",
  "Mooz Dance HD",
  "VH1 Classic",

  // Sports
  "Digi Sport 1 HD RO",
  "Digi Sport 1",
  "Digi Sport 2 HD RO",
  "Digi Sport 2",
  "Digi Sport 3",
  "Digi Sport 4",
  "Extreme Sports Channel",
  "Eurosport 1 HD",
  "Eurosport 2 HD",
  "Eurosport 2",
  "Pro TV International",
  "Auto Motor Sport",
  "Fightbox",
  "Look Sport",
  "Look Sport HD",
  "Telekom Sport 1",
  "Telekom Sport 2",
  "Telekom Sport 3",
  "Telekom Sport 4",
  "Telekom Sport 5" ]
  },
  {
    name: "Hongarije",
    icon: "🇭🇺",
    channels: [
      "HU M1 HD", "HU M2 HD", "HU M4 Sport HD", "HU M5 HD", "HU Duna TV HD",
      "HU RTL Klub HD", "HU TV2 HD", "HU ATV HD", "HU Hír TV HD", "HU Spektrum HD",
      "HU Sport 1 HD", "HU Sport 2 HD", "HU Arena4 HD", "HU Match4 HD",
      "HU Film+ HD", "HU Mozi+ HD", "HU Comedy Central HU HD"
    ]
  },
  {
    name: "Tsjechië",
    icon: "🇨🇿",
    channels: [
      "CZ CT1 HD", "CZ CT2 HD", "CZ CT Sport HD", "CZ CT24 HD", "CZ Nova HD",
      "CZ Nova Cinema HD", "CZ Prima HD", "CZ Prima Cool HD", "CZ Prima Love HD",
      "CZ Barrandov HD", "CZ O2 TV Sport 1 HD", "CZ O2 TV Sport 2 HD",
      "CZ HBO CZ HD", "CZ Cinemax CZ HD", "CZ AMC CZ HD", "CZ Discovery CZ HD"
    ]
  },
  {
    name: "Slowakije",
    icon: "🇸🇰",
    channels: [
      "SK Jednotka HD", "SK Dvojka HD", "SK Markíza HD", "SK Doma HD", "SK Dajto HD",
      "SK JOJ HD", "SK JOJ Plus HD", "SK WAU HD", "SK TA3 HD", "SK Sport 1 SK HD",
      "SK Sport 2 SK HD", "SK Arena Sport SK HD", "SK HBO SK HD", "SK Cinemax SK HD",
      "SK Film+ SK HD", "SK Discovery SK HD", "SK National Geographic SK HD"
    ]
  },
  {
    name: "Kroatië",
    icon: "🇭🇷",
    channels: [
      "HR HRT 1 HD", "HR HRT 2 HD", "HR HRT 3 HD", "HR HRT 4 HD", "HR Nova TV HD",
      "HR Doma TV HD", "HR RTL HR HD", "HR RTL 2 HR HD", "HR N1 HR HD",
      "HR Arena Sport 1 HR HD", "HR Arena Sport 2 HR HD", "HR Arena Sport 3 HR HD",
      "HR Sport Klub 1 HD", "HR HBO HR HD", "HR Cinemax HR HD", "HR Cinestar TV HD"
    ]
  },
  {
    name: "Servië",
    icon: "🇷🇸",
    channels: [
      "RS RTS 1 HD", "RS RTS 2 HD", "RS RTS 3 HD", "RS Pink HD", "RS Prva HD",
      "RS Happy TV HD", "RS B92 HD", "RS O2 TV HD", "RS N1 RS HD", "RS Nova S HD",
      "RS Arena Sport 1 RS HD", "RS Arena Sport 2 RS HD", "RS Arena Sport 3 RS HD",
      "RS Sport Klub 1 RS HD", "RS HBO RS HD", "RS Cinemax RS HD", "RS Fox RS HD"
    ]
  },
  {
    name: "Bulgarije",
    icon: "🇧🇬",
    channels: [
      "BG BNT 1 HD", "BG BNT 2 HD", "BG bTV HD", "BG Nova TV BG HD", "BG Bulgaria ON AIR HD",
      "BG Kanal 3 HD", "BG TV7 HD", "BG Diema HD", "BG Diema Sport HD", "BG Diema Sport 2 HD",
      "BG Diema Sport 3 HD", "BG Ring HD", "BG Max Sport 1 HD", "BG Max Sport 2 HD",
      "BG Film+ BG HD", "BG HBO BG HD", "BG Fox Life BG HD"
    ]
  },
  {
    name: "Slovenië",
    icon: "🇸🇮",
    channels: [
      "SI RTV SLO 1 HD", "SI RTV SLO 2 HD", "SI RTV SLO 3 HD", "SI POP TV HD", "SI Kanal A HD",
      "SI Planet TV HD", "SI Nova24 TV HD", "SI Sport Klub 1 SI HD", "SI Sport Klub 2 SI HD",
      "SI Arena Sport 1 SI HD", "SI Arena Sport 2 SI HD", "SI HBO SI HD", "SI Cinemax SI HD",
      "SI Discovery SI HD", "SI National Geographic SI HD", "SI AMC SI HD"
    ]
  },
  {
    name: "Bosnië",
    icon: "🇧🇦",
    channels: [
      "BA BHT 1 HD", "BA FTV HD", "BA RTRS HD", "BA Hayat TV HD", "BA Face TV HD",
      "BA OBN HD", "BA Pink BH HD", "BA N1 BA HD", "BA Arena Sport 1 BA HD",
      "BA Arena Sport 2 BA HD", "BA Sport Klub 1 BA HD", "BA HBO BA HD"
    ]
  },
  {
    name: "Noord-Macedonië",
    icon: "🇲🇰",
    channels: [
      "MK MRT 1 HD", "MK MRT 2 HD", "MK Sitel HD", "MK Kanal 5 HD", "MK Telma HD",
      "MK Alfa TV HD", "MK 24 Vesti HD", "MK Arena Sport 1 MK HD", "MK Arena Sport 2 MK HD",
      "MK Sport Klub MK HD", "MK HBO MK HD", "MK Fox Life MK HD"
    ]
  },
  {
    name: "Albanië",
    icon: "🇦🇱",
    channels: [
      "AL RTSH 1 HD", "AL RTSH 2 HD", "AL RTSH Sport HD", "AL Top Channel HD", "AL Klan TV HD",
      "AL Vizion Plus HD", "AL TV Klan HD", "AL Ora News HD", "AL News 24 HD",
      "AL SuperSport 1 HD", "AL SuperSport 2 HD", "AL SuperSport 3 HD", "AL SuperSport 4 HD",
      "AL Tring Sport 1 HD", "AL Tring Sport 2 HD", "AL Film Aksion HD"
    ]
  },
  {
    name: "Kosovo",
    icon: "🇽🇰",
    channels: [
      "XK RTK 1 HD", "XK RTK 2 HD", "XK KTV HD", "XK RTV 21 HD", "XK Klan Kosova HD",
      "XK T7 HD", "XK Kohavision HD", "XK ArtMotion Sport 1 HD", "XK ArtMotion Sport 2 HD",
      "XK SuperSport Kosovo 1 HD", "XK SuperSport Kosovo 2 HD"
    ]
  },
  {
    name: "Montenegro",
    icon: "🇲🇪",
    channels: [
      "ME RTCG 1 HD", "ME RTCG 2 HD", "ME TV Vijesti HD", "ME Prva TV ME HD", "ME Pink M HD",
      "ME Nova M HD", "ME Arena Sport 1 ME HD", "ME Arena Sport 2 ME HD",
      "ME Sport Klub 1 ME HD", "ME HBO ME HD"
    ]
  },
  {
    name: "Oekraïne",
    icon: "🇺🇦",
    channels: [
      "UA 1+1 HD", "UA Inter HD", "UA ICTV HD", "UA STB HD", "UA Novy HD",
      "UA Ukraina HD", "UA TV HD", "UA Rada HD", "UA Football 1 HD", "UA Football 2 HD",
      "UA Football 3 HD", "UA Setanta Sports 1 UA HD", "UA Setanta Sports 2 UA HD",
      "UA Megogo Football 1 HD", "UA Megogo Football 2 HD"
    ]
  },
  {
    name: "Rusland",
    icon: "🇷🇺",
    channels: [
      "RU Perviy Kanal HD", "RU Rossiya 1 HD", "RU NTV HD", "RU REN TV HD", "RU STS HD",
      "RU TNT HD", "RU Pyatnitsa HD", "RU TV3 HD", "RU Domashniy HD", "RU Zvezda HD",
      "RU Match TV HD", "RU Match Premier HD", "RU Match Football 1 HD", "RU Match Football 2 HD",
      "RU Kanal Disney HD", "RU Mult HD", "RU Kinopoisk HD"
    ]
  },
  {
    name: "Ierland",
    icon: "🇮🇪",
    channels: [
      "IE RTÉ One HD", "IE RTÉ Two HD", "IE Virgin Media One HD", "IE Virgin Media Two HD",
      "IE TG4 HD", "IE RTÉ News HD", "IE Virgin Media Three HD", "IE Sky Sports IE HD",
      "IE BT Sport IE HD", "IE Setanta Sports IE HD", "IE eir Sport 1 HD", "IE eir Sport 2 HD"
    ]
  },
  {
    name: "IJsland",
    icon: "🇮🇸",
    channels: [
      "IS RÚV HD", "IS RÚV 2 HD", "IS Stöð 2 HD", "IS Stöð 2 Sport HD", "IS Stöð 2 Sport 2 HD",
      "IS Stöð 3 HD", "IS Síminn Sport HD", "IS Viasat Sport IS HD"
    ]
  },
  {
    name: "Luxemburg",
    icon: "🇱🇺",
    channels: [
      "LU RTL Télé Lëtzebuerg HD", "LU Chamber TV HD", "LU Eldoradio TV HD"
    ]
  },
  {
    name: "Malta",
    icon: "🇲🇹",
    channels: [
      "MT TVM HD", "MT TVM 2 HD", "MT One TV HD", "MT NET TV HD", "MT Smash TV HD",
      "MT Xejk HD", "MT F Living HD"
    ]
  },
  {
    name: "Cyprus",
    icon: "🇨🇾",
    channels: [
      "CY RIK 1 HD", "CY RIK 2 HD", "CY Sigma TV HD", "CY ANT1 Cyprus HD", "CY Mega Cyprus HD",
      "CY Alpha Cyprus HD", "CY Capital TV HD", "CY Plus TV HD", "CY Cytavision Sports 1 HD",
      "CY Cytavision Sports 2 HD", "CY Cytavision Sports 3 HD"
    ]
  },
  {
    name: "Letland",
    icon: "🇱🇻",
    channels: [
      "LV LTV1 HD", "LV LTV7 HD", "LV TV3 Latvia HD", "LV LNT HD", "LV TV6 Latvia HD",
      "LV ReTV HD", "LV Sportacentrs HD", "LV Viasat Sport Baltic HD"
    ]
  },
  {
    name: "Litouwen",
    icon: "🇱🇹",
    channels: [
      "LT LRT HD", "LT LRT Plius HD", "LT TV3 Lithuania HD", "LT LNK HD", "LT BTV HD",
      "LT Info TV HD", "LT Lietuvos Rytas TV HD", "LT Viasat Sport Baltic HD"
    ]
  },
  {
    name: "Estland",
    icon: "🇪🇪",
    channels: [
      "EE ETV HD", "EE ETV2 HD", "EE Kanal 2 HD", "EE TV3 Estonia HD", "EE TV6 Estonia HD",
      "EE Kanal 11 HD", "EE Kanal 12 HD", "EE Viasat Sport Baltic HD"
    ]
  },
  // === AMERICAS ===
  {
    name: "Verenigde Staten",
    icon: "🇺🇸",
    channels: [
      // General
      "USA CORONA VIRUS INFO", "USA HBO HD", "USA HBO 2 HD", "USA HBO ZONE HD", "USA HBO SIGNATURE",
      "USA HBO FAMILY HD", "USA HBO COMEDY HD", "USA HALLMARK MOVIES & MYSTERIES HD", "USA HALLMARK HD",
      "USA HALLMARK DRAMA", "USA STARZ", "USA STARZ IN BLACK", "USA STARZ ENCORE WESTERNS",
      "USA STARZ ENCORE", "USA STARZ EDGE", "USA STARZ COMEDY", "USA EPIX HITS", "USA EPIX HD",
      "USA EPIX 2", "USA CINEMAXX MORE MAXX", "USA CINEMAX THRILLERMAX HD", "USA CINEMAX OUTER MAX",
      "USA CINEMAX MOVIEMAX", "USA CINEMAX EAST", "USA CINEMAX ACTION MAX EAST", "USA WGN AMERICA",
      "USA WE TV", "USA VICELAND", "USA USA NETWORK", "USA UNIVISION TDN", "USA UNIVISION",
      "USA UNIMAS", "USA TVONE", "USA TV LAND HD", "USA TRU TV", "USA TNT", "USA TLC CHANNEL",
      "USA THE CW HD CHICAGO", "USA THE CW PIX 11", "USA TELEMUNDO", "USA TCM", "USA TBS",
      "USA TBN TRINITY BROADCASTING NETWORK", "USA SYFY", "USA SUNDANCE", "USA SPIKE/PARAMOUNT",
      "USA SMITHSONIAN CHANNEL", "USA SHOWTIME SHOWCASE", "USA SHOWTIME HD", "USA SHOWTIME EXTREME",
      "USA SHOWTIME 2", "USA REVOLT", "USA REELZ", "USA RED BULL TV", "USA QVC", "USA PURSUIT CHANNEL",
      "USA POP", "USA OXYGEN", "USA OWN NETWORK HD", "USA OVATION", "USA NBC UNIVERSO", "USA NBC 5",
      "USA NBC 4 NY", "USA MY 9", "USA MSNBC", "USA ME TV", "USA MAV TV", "USA LIFETIME MOVIES",
      "USA LIFETIME", "USA LAFF TV", "USA ION TV", "USA INFOWARS", "USA IFC", "USA HSN", "USA HLN",
      "USA HGTV HD", "USA HGTV UHD", "USA HEROS & ICONS", "USA GRIT TV", "USA GALAVISION",
      "USA FYI NETWORK", "USA FXX", "USA FXM", "USA FX HD", "USA FUSE", "USA FREEFORM HD",
      "USA FOOD NETWORK", "USA EL REY NETWORK", "USA EL REY NETWORK HD", "USA E!", "USA DOG TV",
      "USA DIY NETWORK HD", "USA DESTINATION AMERICA", "USA COZI TV", "USA COUNTRY NETWORK",
      "USA COOKING CHANNEL HD", "USA COMET TV", "USA COMEDY CENTRAL", "USA CMT HD", "USA CBS NY HD",
      "USA CBS EAST", "USA BUZZER", "USA BRAVO", "USA BOUNCE TV", "USA BLAZE TV", "USA BET HER",
      "USA BET HD", "USA BBC AMERICA", "USA AXS TV", "USA AWE CHANNEL", "USA ANTENNA TV",
      "USA AMERICAN HEROES CHANNEL", "USA AMC", "USA ABC WEST", "USA ABC NY HD", "USA ABC EAST HD",
      "USA A&E HD",
      // Kids
      "USA BABY TV", "USA UNIVERSAL KIDS HD", "USA TEEN NICK", "USA STARZ KIDS & FAMILY",
      "USA NICKTOONS", "USA NICK JR. TOO", "USA NICK JR", "USA NICK HD", "USA DISNEY XD",
      "USA DISNEY JR", "USA DISNEY CHANNEL HD", "USA PBS WLIW 21", "USA PBS KIDS EAST", "USA PBS",
      "USA CARTOONITO ES", "USA CARTOON NETWORK", "USA BOOMERANG",
      // Documentary
      "USA ANIMAL PLANET", "USA NAT GEO WILD HD US", "USA NAT GEO USA", "USA INVESTIGATION DISCOVERY HD",
      "USA HISTORY CHANNEL", "USA HISTORY 2", "USA DISCOVERY SCIENCE HD", "USA DISCOVERY LIFE",
      "USA DISCOVERY FAMILY", "USA DISCOVERY CHANNEL HD", "USA CRIME AND INVESTIGATION",
      "USA TRAVEL CHANNEL", "USA WORLD FISHING NETWORK", "USA OUTSIDE TV", "USA OUTDOOR CHANNEL",
      // News
      "USA BLOOMBERG", "USA CNN", "USA CNBC", "USA RT NEWS", "USA ONE AMERICA NEWS", "USA NEWS 12 NEW JERSEY",
      "USA NEWS 12 LONG ISLAND", "USA FOX NEWS", "USA ESPN NEWS", "USA ABC NEWS HD",
      "USA THE WEATHER CHANNEL HD", "USA FOX BUSINESS HD", "USA FOX 50", "USA FOX 5 HD",
      // Music
      "USA MTV 2", "USA MTV LIVE", "USA MTV HD", "USA VH1 HD",
      // Sports
      "USA WWE", "USA UFC 24/7", "USA TVG HORSE RACING", "USA TENNIS HD", "USA SPORTSNET NY",
      "USA SPORTSMAN CHANNEL", "USA SEC NETWORK", "USA PAC-12 OREGON", "USA PAC-12 MOUNTAIN",
      "USA PAC-12 BAY AREA", "USA PAC-12 ARIZONA", "USA PAC 12 NETWORK", "USA PAC 12 LOS ANGELES",
      "USA NHL NETWORK", "USA NFL RED ZONE", "USA NFL NETWORK", "USA NESN", "USA NBC SPORTS PHILADELPHIA HD",
      "USA NBC SPORTS NORTHWEST HD", "USA NBC SPORTS NETWORK", "USA NBC SPORTS CHICAGO HD",
      "USA NBC SPORTS CALIFORNIA HD", "USA NBC SPORTS BOSTON HD", "USA NBC SPORTS BAY AREA HD",
      "USA NBC GOLF", "USA NBC 10 EAST", "USA NBA TV HD", "USA MSG +", "USA MSG", "USA MOTOR TREND",
      "USA MLB NETWORK", "USA LONGHORN NETWORK", "USA GOLF CHANNEL", "USA GAME SHOW NETWORK",
      "USA FOX SPORTS 1", "USA FOX SPORTS 2", "USA FOX SOCCER PLUS", "USA FOX DEPORTES",
      "USA FANTASY SPORTS NETWORK", "USA ESPN U", "USA ESPN 2", "USA ESPN", "USA ELEVEN SPORTS HD",
      "USA CBSN SPORTS NETWORK", "USA CBS SPORTS NETWORK", "USA BIG TEN NETWORK", "USA BEIN SPORT USA",
      "USA MARQUEE SPORTS NETWORK HD",
      // US Channels - News
      "US ABC NEWS HD (EAST)", "US ABC NEWS HD", "US BBC AMERICA HD", "US FOX NEWS CHANNEL HD",
      "US NBC NEWS NOW", "US ACCU WEATHER HD", "US ACCU WEATHER UHD", "US WEATHER NATION HD",
      "US THE WEATHER CHANNEL HD", "US C-SPAN HD", "US C-SPAN UHD", "US C-SPAN 2 HD", "US C-SPAN 2 UHD",
      "US C-SPAN 3", "US FOX BUSINESS NETWORK HD", "US FOX BUSINESS NETWORK", "US ONE AMERICAN NEWS NETWORK UHD",
      "US CHEDDAR BUSINESS HD", "US CHEDDAR NEWS HD", "US CHEDDAR BUSINESS UHD", "US ONE AMERICA NEWS NETWORK HD",
      "US BBC AMERICA UHD", "US BBC WORLD NEWS HD", "US CNBC UHD", "US AL JAZEERA UHD", "US AL JAZEERA",
      "US RT NEWS HD", "US CNBC WORLD HD", "US CNN INTERNATIONAL HD", "US CNN HD", "US BLOOMBERG UHD",
      "US CBS NEWS HD", "US CHEDDAR NEWS UHD", "US NBCSN HD", "US NEWSMAX TV HD", "US NEWSNET",
      "US NEWSY HD", "US NBC 6 (MIAMI FL) HD", "US CBS 4 (MIAMI FL)", "US FOX 7 (MIAMI FL)",
      "US UNIVISION 23 (MIAMI FL) HD",
      // US Channels - Entertainment
      "US FOX HD", "US ABC HD", "US ADULT SWIM (WEST) HD", "US PBS HD", "US E! ENTERTAINMENT TELEVISION (EAST) HD",
      "US E! ENTERTAINMENT TELEVISION (WEST) HD", "US E! UHD", "US A&E HD", "US BET (EAST) HD",
      "US BET (WEST) HD", "US BET HER UHD", "US BET UHD", "US SYFY WEST HD", "US SYFY HD", "US MGM SCI-FI",
      "US MGM HD", "US SMITHSONIAN CHANNEL UHD", "US SMITHSONIAN (EAST) HD", "US SMITHSONIAN CHANNEL (WEST) HD",
      "US FOOD NETWORK (EAST) HD", "US FOOD NETWORK (EAST) UHD", "US FOOD NETWORK (WEST) HD",
      "US FOOD NETWORK (WEST) UHD", "US COOKING CHANNEL HD", "US LIFETIME MOVIE NETWORK HD", "US LIFETIME HD",
      "US TNT (EAST) HD", "US TNT UHD", "US QVC 2 HD", "US QVC 3 HD", "US QVC HD", "US LIFETIME MOVIE NETWORK UHD",
      "US LIFETIME MOVIES UHD", "US LIFETIME UHD", "US USA NETWORK (EAST) HD", "US USA NETWORK (WEST) HD",
      "US HALLMARK DRAMA HD", "US HALLMARK MOVIES & MYSTERIES HD", "US AXS TV HD", "US BRAVO (West) HD",
      "US BUZZR", "US COZI TV", "US FREEFORM HD", "US FUSE HD", "US FX (EAST) HD", "US FX MOVIE CHANNEL HD",
      "US FXM HD", "US FXX (West) HD", "US FXX HD", "US FYI HD", "US COMET TV HD", "US CONTV UHD",
      "US COURT TV HD", "US GREAT AMERICAN COUNTRY HD", "US HEROES AND ICONS", "US HGTV (WEST) HD",
      "US HLN HD", "US HSN HD", "US IFC HD", "US OWN HD", "US PEACE TV", "US PEOPLE TV HD", "US POP HD",
      "US PX SPORTS HD", "US SUNDANCE TV HD", "US TBS (EAST) HD", "US TBS (West) HD", "US TNT (WEST) HD",
      "US TRU TV (WEST) HD", "US TRU TV (EAST) HD", "US A&E UHD", "US OXYGEN (EAST) HD", "US OXYGEN (WEST) HD",
      "US ASPIRE TV UHD", "US AWE UHD*", "US AXS TV UHD", "US BRAVO (EAST) UHD", "US BRAVO UHD",
      "US TV LAND (WEST) HD", "US TV LAND HD", "US DAVE & AVA UHD", "US FM UHD", "US FUSE UHD", "US Fusion UHD",
      "US GSN UHD", "US HGTV (EAST) UHD", "US IFC UHD", "US ION TV UHD", "US JUSTICE CENTRAL UHD",
      "US OUTSIDE TV UHD", "US OVATION UHD", "US OWN UHD", "US OXYGEN UHD", "US POP UHD", "US REVOLT HD",
      "US RFD-TV UHD", "US SUNDANCE TV UHD", "US TBS UHD", "US TRU TV (EAST) UHD", "US VICELAND UHD",
      "US UP UHD", "US USA NETWORK UHD", "US AMC HD", "US AMC UHD", "US COMEDY CENTRAL (WEST) HD",
      "US COMEDY CENTRAL HD", "US TLC (WEST) HD", "US TLC (EAST) HD", "US TLC UHD", "US WE TV UHD",
      "US AWE UHD", "US TV ONE UHD", "US WGN AMERICA UHD", "US ANTENNA TV", "US GEM SHOPPING NETWORK",
      "US UNIVISION HD", "US GALAVISION HD", "US TELEMUNDO 47 UHD", "US TELEMUNDO 51 HD (Miami)",
      // US Channels - Kids
      "US BABY FIRST TV HD", "US UNIVERSAL KIDS (WEST) UHD", "US UNIVERSAL KIDS (EAST) UHD",
      "US UNIVERSAL KIDS HD", "US NICK JR (EAST) HD", "US NICK JR (WEST) HD", "US NICK MUSIC",
      "US NICK TOONS HD", "US NICK HD", "US NICKELODEON (EAST) HD", "US NICKELODEON (WEST) HD",
      "US NICKTOONS HD", "US NICKTOONS UHD", "US TEEN NICK UHD", "US MR. BEAN CARTOON WORLD UHD",
      "US CARTOON NETWORK (EAST) UHD", "US CARTOON NETWORK (WEST) UHD", "US CARTOON NETWORK (EAST) HD",
      "US CARTOON NETWORK (WEST) HD", "US PBS KIDS HD", "US NICK JR UHD", "US COMEDY CENTRAL HD",
      "US DISNEY CHANNEL (EAST) HD", "US DISNEY JR HD", "US DISNEY XD (EAST) HD", "US BOOMERANG",
      "US TEEN TITANS GO! HD", "US COMEDY TV UHD", "US BABY FIRST UHD",
      // US Channels - Movies
      "US CINEMAX (EAST) UHD", "US CINEMAX ACTIONMAX UHD", "US CINEMAX MOREMAX UHD", "US CINEMAX (EAST) HD",
      "US CINEMAX 5 STARMAX UHD", "US CINEMAX ACTIONMAX HD", "US CINEMAX MOVIEMAX HD", "US CINEMAX MOREMAX HD",
      "US HALLMARK CHANNEL UHD", "US HALLMARK UHD", "US HBO (EAST) HD", "US HBO (WEST) HD", "US HBO 2 UHD",
      "US HBO COMEDY UHD", "US HBO FAMILY UHD", "US HBO SIGNATURE UHD", "US HBO ZONE UHD", "US HDNET MOVIES UHD",
      "US HALLMARK DRAMA UHD", "US HALLMARK MOVIES & MYSTERIES UHD", "US FILMRISE FAMILY HD",
      "US SHOWTIME (EAST) UHD", "US SHOWTIME (WEST) UHD", "US SHOWTIME 2 UHD", "US SHOWTIME BEYOND UHD",
      "US SHOWTIME EXTREME UHD", "US SHOWTIME NEXT UHD", "US SHOWTIME SHOWCASE UHD", "US SHOWTIME WOMEN UHD",
      "US SHOWTIME (EAST) HD", "US SHOWTIME FAMILY ZONE HD", "US SHOWTIME FAMILY ZONE UHD",
      "US STARZ (EAST) UHD", "US STARZ (WEST) UHD", "US STARZ COMEDY UHD", "US STARZ EDGE UHD",
      "US STARZ ENCORE (WEST) UHD", "US STARZ ENCORE ACTION UHD", "US STARZ ENCORE BLACK UHD",
      "US STARZ ENCORE CLASSIC UHD", "US STARZ ENCORE FAMILY UHD", "US STARZ ENCORE SUSPENSE UHD",
      "US STARZ ENCORE WESTERNS UHD", "US STARZ ENCORE UHD", "US STARZ KIDS AND FAMILY UHD",
      "US STARZ (WEST) UHD*", "US SONY MOVIE CHANNEL HD", "US HDNET MOVIES HD", "US EPIX 2 UHD",
      "US EPIX HITS UHD", "US EPIX UHD", "US EPIX DRIVE IN HD", "US EPIX HITS HD", "US TURNER CLASSIC MOVIES HD",
      "US INDIE PLEX UHD", "US STARZ (EAST) HD", "US STARZ CINEMA HD", "US STARZ Encore (EAST) HD",
      "US STARZ ENCORE (WEST) HD", "US STARZ ENCORE ACTION HD", "US STARZ ENCORE BLACK HD",
      "US STARZ ENCORE CLASSIC HD", "US STARZ ENCORE FAMILY HD", "US STARZ ENCORE SUSPENSE HD",
      "US STARZ ENCORE WESTERNS HD", "US STARZ IN BLACK HD", "US STARZ KIDS AND FAMILY HD",
      // US Channels - Music
      "US BET JAMS", "US BET SOUL", "US MTV (ALTERNATE) HD", "US MTV 2 (WEST) HD", "US MTV 2 (EAST) HD",
      "US MTV LIVE HD", "US MTV U", "US MTV CLASSIC", "US VH1 (EAST) HD", "US VH1 (WEST) HD", "US CMT HD",
      "US COWBOY CHANNEL HD", "US VH1 (East) UHD", "US MC MUSIC 90S", "US MC MUSIC BRITISH HITS",
      "US MC MUSIC DANCE/ EDM", "US MC MUSIC HIP-HOP AND R&B", "US MC MUSIC HIT LIST", "US MC MUSIC INDIE",
      "US MC MUSIC KIDZ ONLY!", "US MC MUSIC METAL", "US MC MUSIC MEXICANA", "US MC MUSIC POP & COUNTRY",
      "US MC MUSIC POP HITS", "US MC MUSIC POP LATINO", "US MC MUSIC R&B", "US MC MUSIC R&B SOUL",
      "US MC MUSIC RAP 2K", "US MC MUSIC ROCK", "US MC MUSIC TEEN BEATS", "US MC MUSIC THROWBACK JAMZ",
      "US MC MUSIC TODAYS COUNTRY", "US MC MUSIC TODDLER TUNES", "US MC MUSIC TROPICALES", "US MC MUSIC Y2K",
      // US Channels - Documentary
      "US CRIME & INVESTIGATION UHD", "US NATIONAL GEOGRAPHIC HD", "US NATIONAL GEOGRAPHIC WILD HD",
      "US SCIENCE HD", "US DISCOVERY INVESTIGATION HD", "US DISCOVERY (EAST) HD", "US DISCOVERY (WEST) HD",
      "US DISCOVERY UHD", "US DISCOVERY CHANNEL HD", "US DISCOVERY FAMILY HD", "US DISCOVERY SCIENCE HD",
      "US DISCOVERY TURBO", "US DISCOVERY LIFE HD", "US DISCOVERY VELOCITY HD", "US AMERICAN HEROES CHANNEL UHD",
      "US DESTINATION AMERICA UHD", "US HISTORY HD", "US HISTORY UHD", "US H2 HD", "US CLASSIC ARTS SHOWCASE HD",
      "US TRAVEL CHANNEL (EAST) HD", "US TRAVEL CHANNEL (WEST) HD", "US TRAVEL CHANNEL UHD",
      "US OUTDOOR CHANNEL HD", "US ANIMAL PLANET UHD", "US ANIMAL PLANET (WEST) HD", "US ANIMAL PLANET (EAST) HD",
      // US Channels - Sports
      "US ATLANTA CHANNEL HD", "US NECN HD", "US NESN BOSTON HD", "US NESN PLUS HD", "US TYC SPORTS HD",
      "US FOX DEPORTES HD", "US FOX SOCCER PLUS HD", "US CBS SPORTS NETWORK UHD", "US FOX SPORTS 1 UHD",
      "US FOX SPORTS 2 UHD", "US BIG TEN NETWORK HD", "US BIG TEN NETWORK 2 HD", "US BIG TEN NETWORK 3 HD",
      "US BIG TEN NETWORK 4 HD", "US SPECTRUM SPORTSNET UHD", "US SPECTRUM SPORTSNET LA HD",
      "US GAME SHOW NETWORK HD", "US SPORTSMAN CHANNEL HD", "US SPORTSNET (NEW YORK) HD",
      "US SPORTSNET SOUTHWEST (ALTERNATE) HD", "US SPORTSNET SOUTHWEST HD", "US STADIUM 1 HD", "US STADIUM 2 HD",
      "US NBC GOLF HD", "US UFC TV UHD", "US MOTORTREND HD", "US TYC SPORTS UHD", "US FIGHT NETWORK HD",
      "US FIGHTBOX", "US GOLF CHANNEL HD", "US GOLF CHANNEL UHD", "US TENNIS CHANNEL UHD",
      "US ELEVEN SPORTS NETWORK HD", "US GINX ESPORTS TV HD", "US NFL NETWORK HD", "US NFL REDZONE HD",
      "US NHL ARIZONA CAYOTES HD", "US NHL NETWORK ALT HD", "US NHL NETWORK HD", "US AT&T SPORTSNET SOUTHWEST HD",
      "US AT&T SPORTSNET HD", "US WWE NETWORK HD", "US UFC 24/7 UHD", "US ESPN HD", "US ESPN 2 HD",
      "US ESPN 3 HD", "US ESPN DEPORTES HD", "US ESPN LONGHORN NETWORK HD", "US ESPN NEWS HD",
      "US ESPN SEC NETWORK HD", "US ESPN U HD", "US BEIN SPORTS HD", "US BEIN SPORTS 2", "US BEIN SPORTS 4",
      "US BEIN SPORTS 4 HD", "US BEIN SPORTS 5 HD", "US BEIN SPORTS 6", "US BEIN SPORTS 6 HD", "US BEIN SPORTS 7",
      "US BEIN SPORTS 7 HD", "US BEIN SPORTS 8", "US BEIN SPORTS 8 HD", "US BEIN SPORTS EN ESPANOL HD",
      "US BEIN SPORTS LALIGA HD", "US BEIN SPORTS LALIGA UHD", "US NBC SPORTS BAY AREA HD",
      "US NBC SPORTS BAY AREA+ HD", "US NBC SPORTS BOSTON HD", "US NBC SPORTS California+ HD",
      "US NBC SPORTS CHICAGO PLUS HD", "US NBC SPORTS CHICAGO HD", "US NBC SPORTS NETWORK HD",
      "US NBC SPORTS NORTHWEST HD", "US NBC SPORTS PHILADELPHIA HD", "US NBC SPORTS PHILLY PLUS HD",
      "US NBC SPORTS WASHINGTON PLUS HD", "US NHL NETWORK UHD", "US PAC-12 (ARIZONA) HD", "US PAC-12 (BAY AREA) HD",
      "US PAC-12 (LOS ANGELES) HD", "US PAC-12 (MOUNTAIN) HD", "US PAC-12 (OREGON) HD", "US PAC-12 (WASHINGTON) HD",
      "US PAC-12 NETWORK HD", "US TVG 2 NETWORK HD", "US TVG NETWORK HD", "US MLB NETWORK ALT HD",
      "US MLB NETWORK HD", "US MLB STRIKEZONE HD", "US MSG 2 PLUS HD", "US MSG 2 HD", "US MSG PLUS HD",
      "US MSNBC HD", "US NASA TV", "US NBA TV HD", "US OLYMPIC CHANNEL HD", "US WILLOW CRICKET HD",
      "US WORLD FISHING NETWORK HD", "US NBA TV UHD", "US DIY NETWORK UHD", "US MSG HD", "US MSNBC UHD",
      "US MLB NETWORK UHD", "US MOTORTREND UHD", "US NBC SPORTS NETWORK UHD", "US OLYMPIC CHANNEL UHD",
      "US NBC GOLD 10 HD", "US YES NETWORK HD", "US RED BULL TV HD", "US SEC NETWORK HD",
      "US NBA: ATLANTA HAWKS UHD", "US NBA: BOSTON CELTICS UHD", "US NBA: BROOKLYN NETS UHD",
      "US NBA: CHARLOTTE HORNETS UHD", "US NBA: CHICAGO BULLS UHD", "US NBA: CLEVELAND CAVALIERS UHD",
      "US NBA: DALLAS MAVERICKS UHD", "US NBA: DENVER NUGGETS UHD", "US NBA: DETROIT PISTONS UHD",
      "US NBA: GOLDEN STATE WARRIORS UHD", "US NBA: HOUSTON ROCKETS UHD", "US NBA: INDIANA PACERS UHD",
      "US NBA: LOS ANGELES CLIPPERS UHD", "US NBA: MEMPHIS GRIZZLIES UHD", "US NBA: MIAMI HEAT UHD",
      "US NBA: MILWAUKEE BUCKS UHD", "US NBA: MINNESOTA TIMBERWOLVES UHD", "US NBA: NEW ORLEANS PELICANS UHD",
      "US NBA: NEW YORK KNICKS UHD", "US NBA: OKLAHOMA CITY THUNDER UHD", "US NBA: ORLANDO MAGIC UHD",
      "US NBA: PHILADELPHIA 76ERS UHD", "US NBA: PHOENIX SUNS UHD", "US NBA: PORTLAND TRAIL BLAZERS UHD",
      "US NBA: SACRAMENTO KINGS UHD", "US NBA: SAN ANTONIO SPURS UHD", "US NBA: TORONTO RAPTORS UHD",
      "US NBA: UTAH JAZZ UHD", "US NBA: WASHINGTON WIZARDS UHD", "US NFL: 49ERS UHD", "US NFL: BEARS UHD",
      "US NFL: BENGALS UHD", "US NFL: BILLS UHD", "US NFL: BRONCOS UHD", "US NFL: BROWNS UHD",
      "US NFL: BUCCANEERS UHD", "US NFL: CARDINALS UHD", "US NFL: CHARGERS UHD", "US NFL: CHIEFS UHD",
      "US NFL: COLTS UHD", "US NFL: COWBOYS UHD", "US NFL: DOLPHINS UHD", "US NFL: EAGLES UHD",
      "US NFL: FALCONS UHD", "US NFL: JAGUARS UHD", "US NFL: JETS UHD", "US NFL: LIONS UHD",
      "US NFL: PACKERS UHD", "US NFL: PANTHERS UHD", "US NFL: PATRIOTS UHD", "US NFL: RAIDERS UHD",
      "US NFL: RAMS UHD", "US NFL: RAVENS UHD", "US NFL: REDSKINS UHD", "US NFL: SAINTS UHD",
      "US NFL: SEAHAWKS UHD", "US NFL: STEELERS UHD", "US NFL: TEXANS UHD", "US NFL: TITANS UHD",
      "US NFL: VIKINGS UHD", "US NBC GOLD 1 UHD", "US NBC GOLD 2 UHD", "US NBC GOLD 3 UHD", "US NBC GOLD 4 UHD",
      "US NBC GOLD 5 UHD", "US NBC GOLD 6 UHD", "US NBC GOLD 7 UHD", "US NBC GOLD 8 UHD", "US NBC GOLD 9 UHD",
      "US MARQUEE SPORTS NETWORK HD"
    ]
  },
  {
    name: "Canada",
    icon: "🇨🇦",
    channels: [
      "CA CBC HD", "CA CBC FHD", "CA CBC Toronto HD", "CA CBC Vancouver HD", "CA CBC Montreal HD",
      "CA CBC Calgary HD", "CA CBC Edmonton HD", "CA CBC Winnipeg HD", "CA CBC Ottawa HD",
      "CA CBC News Network HD", "CA CBC News FHD", "CA CTV HD", "CA CTV FHD", "CA CTV Toronto HD",
      "CA CTV Vancouver HD", "CA CTV Calgary HD", "CA CTV Edmonton HD", "CA CTV Winnipeg HD",
      "CA CTV 2 HD", "CA CTV News Channel HD", "CA CTV Comedy Channel HD", "CA CTV Drama Channel HD",
      "CA CTV Sci-Fi Channel HD", "CA Global HD", "CA Global FHD", "CA Global Toronto HD",
      "CA Global Vancouver HD", "CA Global Calgary HD", "CA Global Edmonton HD",
      "CA City HD", "CA City FHD", "CA City Toronto HD", "CA City Vancouver HD",
      "CA Citytv HD", "CA OMNI 1 HD", "CA OMNI 2 HD", "CA CHCH HD",
      "CA TSN 1 HD", "CA TSN 1 FHD", "CA TSN 2 HD", "CA TSN 2 FHD", "CA TSN 3 HD", "CA TSN 3 FHD",
      "CA TSN 4 HD", "CA TSN 4 FHD", "CA TSN 5 HD", "CA TSN 5 FHD", "CA TSN HD",
      "CA Sportsnet HD", "CA Sportsnet FHD", "CA Sportsnet One HD", "CA Sportsnet One FHD",
      "CA Sportsnet 360 HD", "CA Sportsnet Ontario HD", "CA Sportsnet Ontario FHD",
      "CA Sportsnet West HD", "CA Sportsnet West FHD", "CA Sportsnet East HD", "CA Sportsnet Pacific HD",
      "CA Sportsnet World HD", "CA NHL Network CA HD", "CA NBA TV Canada HD",
      "CA ESPN CA HD", "CA ESPN2 CA HD", "CA Golf Channel CA HD", "CA Outdoor Network CA HD",
      "CA RDS HD", "CA RDS FHD", "CA RDS 2 HD", "CA RDS Info HD", "CA TVA Sports HD", "CA TVA Sports FHD",
      "CA TVA Sports 2 HD", "CA TVA Sports 3 HD", "CA beIN Sports CA HD", "CA Fight Network HD",
      "CA Crave HD", "CA Crave 1 HD", "CA Crave 2 HD", "CA Crave 3 HD", "CA Crave 4 HD",
      "CA HBO Canada HD", "CA HBO 2 Canada HD", "CA TMN HD", "CA TMN 2 HD", "CA TMN 3 HD", "CA TMN 4 HD",
      "CA Super Channel HD", "CA Super Channel Fuse HD", "CA Super Channel Heart & Home HD",
      "CA Hollywood Suite 70s HD", "CA Hollywood Suite 80s HD", "CA Hollywood Suite 90s HD",
      "CA Hollywood Suite 00s HD", "CA Starz CA HD", "CA Sundance CA HD",
      "CA Showcase HD", "CA Showcase FHD", "CA W Network HD", "CA Slice HD", "CA OWN CA HD",
      "CA HGTV Canada HD", "CA Food Network Canada HD", "CA Cooking Channel CA HD",
      "CA History CA HD", "CA National Geographic CA HD", "CA Nat Geo Wild CA HD",
      "CA Discovery Channel CA HD", "CA Discovery Science CA HD", "CA Discovery Velocity CA HD",
      "CA Animal Planet CA HD", "CA TLC Canada HD", "CA ID Canada HD", "CA Crime+Investigation CA HD",
      "CA A&E CA HD", "CA Lifetime CA HD", "CA Lifetime Movie Network CA HD", "CA Makeful HD",
      "CA YTV HD", "CA Treehouse HD", "CA Family HD", "CA Disney Channel CA HD", "CA Disney Junior CA HD",
      "CA Disney XD CA HD", "CA Nickelodeon CA HD", "CA Nick Jr CA HD", "CA Cartoon Network CA HD",
      "CA Teletoon HD", "CA Family CHRGD HD", "CA Teletoon Retro HD",
      "CA CP24 HD", "CA BNN Bloomberg HD", "CA CTV News HD", "CA CBC News HD",
      "CA Much HD", "CA MTV Canada HD", "CA CMT Canada HD", "CA E! Canada HD",
      "CA Comedy Gold HD", "CA Comedy Network HD", "CA Space HD", "CA Syfy CA HD",
      "CA TVA HD", "CA ICI Radio-Canada Télé HD", "CA ICI RDI HD", "CA ICI ARTV HD",
      "CA V HD", "CA Noovo HD", "CA Canal D HD", "CA Canal Vie HD", "CA VRAK HD",
      "CA Z HD", "CA Séries+ HD", "CA Historia HD", "CA Évasion HD", "CA Météo Média HD"
    ]
  },
  {
    name: "Mexico",
    icon: "🇲🇽",
    channels: [
      "MX Televisa HD", "MX TV Azteca HD", "MX Canal 5 HD", "MX Azteca 7 HD", "MX Azteca Uno HD",
      "MX Las Estrellas HD", "MX Canal de las Estrellas HD", "MX Fox Sports MX HD",
      "MX ESPN MX HD", "MX TUDN HD", "MX Azteca Deportes HD", "MX Cinemax MX HD"
    ]
  },
  {
    name: "Brazilië",
    icon: "🇧🇷",
    channels: [
      "BR Globo HD", "BR Globo FHD", "BR Globo SP HD", "BR Globo RJ HD", "BR Globo MG HD",
      "BR Globo RS HD", "BR Globo BA HD", "BR Globo NE HD", "BR Globo DF HD",
      "BR SBT HD", "BR SBT FHD", "BR SBT SP HD", "BR SBT RJ HD", "BR Record HD", "BR Record FHD",
      "BR RecordNews HD", "BR Record SP HD", "BR Record RJ HD", "BR Band HD", "BR Band FHD",
      "BR Band SP HD", "BR Band News HD", "BR Band Sports HD", "BR RedeTV HD", "BR RedeTV FHD",
      "BR TV Cultura HD", "BR TV Brasil HD", "BR TV Justiça HD", "BR TV Senado HD", "BR TV Câmara HD",
      "BR GloboNews HD", "BR GloboNews FHD", "BR CNN Brasil HD", "BR CNN Brasil FHD",
      "BR Jovem Pan News HD", "BR BandNews HD", "BR Record News HD",
      "BR SporTV HD", "BR SporTV FHD", "BR SporTV 2 HD", "BR SporTV 2 FHD", "BR SporTV 3 HD",
      "BR SporTV 4 HD", "BR Premiere Clubes HD", "BR Premiere Clubes FHD", "BR Premiere 2 HD",
      "BR Premiere 3 HD", "BR Premiere 4 HD", "BR Premiere 5 HD", "BR Premiere 6 HD",
      "BR Premiere 7 HD", "BR Premiere 8 HD", "BR Combate HD", "BR Combate FHD",
      "BR ESPN BR HD", "BR ESPN BR FHD", "BR ESPN 2 BR HD", "BR ESPN 3 BR HD", "BR ESPN 4 BR HD",
      "BR ESPN Extra BR HD", "BR Fox Sports BR HD", "BR Fox Sports 2 BR HD",
      "BR BandSports HD", "BR Woohoo HD", "BR Canal Off HD", "BR Esporte Interativo HD",
      "BR DAZN 1 BR HD", "BR DAZN 2 BR HD", "BR Star+ BR HD", "BR Conmebol TV 1 HD",
      "BR Telecine Premium HD", "BR Telecine Premium FHD", "BR Telecine Action HD",
      "BR Telecine Touch HD", "BR Telecine Fun HD", "BR Telecine Pipoca HD", "BR Telecine Cult HD",
      "BR HBO BR HD", "BR HBO BR FHD", "BR HBO 2 BR HD", "BR HBO Family BR HD", "BR HBO Mundi BR HD",
      "BR HBO Plus BR HD", "BR HBO Signature BR HD", "BR HBO Xtreme BR HD", "BR Max BR HD",
      "BR Megapix HD", "BR Cinemax BR HD", "BR TNT BR HD", "BR TNT BR FHD", "BR TNT Séries BR HD",
      "BR Warner Channel BR HD", "BR Space BR HD", "BR TCM BR HD", "BR AMC BR HD",
      "BR AXN BR HD", "BR Sony BR HD", "BR Universal BR HD", "BR Studio Universal BR HD",
      "BR A&E BR HD", "BR Lifetime BR HD", "BR Paramount Network BR HD", "BR Comedy Central BR HD",
      "BR Multishow HD", "BR Multishow FHD", "BR GNT HD", "BR Viva HD", "BR Mais Globosat HD",
      "BR Bis HD", "BR Canal Brasil HD", "BR Curta! HD", "BR Arte 1 HD",
      "BR Discovery Channel BR HD", "BR Discovery BR FHD", "BR Discovery Science BR HD",
      "BR Discovery Home & Health BR HD", "BR Discovery Turbo BR HD", "BR Discovery Theater BR HD",
      "BR Animal Planet BR HD", "BR TLC BR HD", "BR ID BR HD", "BR H2 BR HD",
      "BR National Geographic BR HD", "BR Nat Geo Wild BR HD", "BR Nat Geo Kids BR HD",
      "BR History BR HD", "BR History 2 BR HD", "BR Lifetime BR HD", "BR FYI BR HD",
      "BR Cartoon Network BR HD", "BR Boomerang BR HD", "BR Gloob HD", "BR Gloobinho HD",
      "BR Disney Channel BR HD", "BR Disney Junior BR HD", "BR Disney XD BR HD",
      "BR Nickelodeon BR HD", "BR Nick Jr BR HD", "BR Nickelodeon 2 BR HD", "BR Discovery Kids BR HD",
      "BR MTV BR HD", "BR VH1 BR HD", "BR Bis HD", "BR Multishow HD"
    ]
  },
  {
    name: "Argentinië",
    icon: "🇦🇷",
    channels: [
      "AR Canal 13 HD", "AR Telefe HD", "AR América TV HD", "AR TV Pública HD", "AR Canal 9 HD",
      "AR TyC Sports HD", "AR ESPN AR HD", "AR Fox Sports AR HD", "AR TNT Sports AR HD",
      "AR Star+ AR HD", "AR HBO AR HD", "AR Cinemax AR HD", "AR Space AR HD"
    ]
  },
  {
    name: "Colombia",
    icon: "🇨🇴",
    channels: [
      "CO Caracol HD", "CO RCN HD", "CO Canal Uno HD", "CO Canal Institucional HD",
      "CO Win Sports HD", "CO Win Sports+ HD", "CO ESPN CO HD", "CO Fox Sports CO HD",
      "CO DirecTV Sports HD", "CO HBO CO HD", "CO Cinemax CO HD"
    ]
  },
  {
    name: "Chili",
    icon: "🇨🇱",
    channels: [
      "CL TVN HD", "CL Mega HD", "CL Canal 13 CL HD", "CL Chilevisión HD", "CL La Red HD",
      "CL CDF HD", "CL TNT Sports CL HD", "CL ESPN CL HD", "CL Fox Sports CL HD",
      "CL DirecTV Sports CL HD", "CL HBO CL HD"
    ]
  },
  {
    name: "Peru",
    icon: "🇵🇪",
    channels: [
      "PE América TV HD", "PE Latina HD", "PE Panamericana HD", "PE ATV HD", "PE TV Perú HD",
      "PE Gol Perú HD", "PE Movistar Deportes HD", "PE ESPN PE HD", "PE Fox Sports PE HD",
      "PE DirecTV Sports PE HD", "PE HBO PE HD"
    ]
  },
  {
    name: "Venezuela",
    icon: "🇻🇪",
    channels: [
      "VE Venevisión HD", "VE Televen HD", "VE Globovisión HD", "VE VTV HD", "VE TVes HD",
      "VE Meridiano TV HD", "VE ESPN VE HD", "VE Fox Sports VE HD", "VE IVC HD"
    ]
  },
  {
    name: "Ecuador",
    icon: "🇪🇨",
    channels: [
      "EC Ecuavisa HD", "EC Teleamazonas HD", "EC TC Televisión HD", "EC RTS HD", "EC Canal Uno EC HD",
      "EC GamaTV HD", "EC ESPN EC HD", "EC Fox Sports EC HD", "EC DirecTV Sports EC HD"
    ]
  },
  // === MIDDLE EAST ===
  {
    name: "Turkije",
    icon: "🇹🇷",
    channels: [
      "Trt Muzik Uhd", "Nr 1 Uhd", "Kral Tv Hd", "Kral Performans Tv Hd", "Kral Pop Hd",
      "Elit Pop", "Metropol Ankara", "Elit Arabesk", "Elit Ankara Hd", "Nr 1 Turk Uhd",
      "Power Uhd", "Power Turk Uhd", "Dream Turk", "Vatan Tv", "Dem Tv", "Trt Belgesel Uhd",
      "Tgrt Belgesel", "Discovery Channel Hd", "Discovery Science Hd", "Ngc Hd", "Ngc Wild Hd",
      "History Channel Hd", "Animal Planet Hd", "Insight Tv Hd", "Love Nature Hd", "Tlc Uhd",
      "Bein Gurme Hd", "Animaux", "Chasse Et Peche", "Bein Iz Hd", "24 Kitchen Hd", "Bbc Earth Hd",
      "Id Tr Hd", "Da Vinci Hd", "Viasat History Hd", "Outdoor Smart Hd", "Discovery Showcase Hd",
      "Discovery Idx Hd", "Fast Fun Hd", "D Max Hd", "Crystal Movies", "Crystal Dirilis Ertugrul",
      "Movie Premium Hd", "Movie Premium 2 Hd", "Movie Platin Hd", "Movie Platin 2 Hd",
      "Movie Family Hd", "Movie Gold Hd", "Fx Hd", "Movie Classic Hd", "e Action Hd", "Movie Turk Hd",
      "Dizi Premium Hd", "Bein Movies Action Hd", "Bein Movies Action 2 Hd", "Bein Movies Family Hd",
      "Bein Movies Premier Hd", "Bein Movies Premier 2 Hd", "Bein Movies Stars Hd", "Bein Movies Turk Hd",
      "Bein Series Comedy Hd", "Bein Series Drama Hd", "Bein Series Sci-Fi Hd", "Bein Series Vice Hd",
      "Bein Box Office 1 Hd", "Bein Box Office 2 Hd", "Bein Box Office 3 Hd", "Jumbo Tv Macera Hd",
      "Jumbo Tv Korku Hd", "Jumbo Tv Komedi Hd", "Jumbo Tv Gerilim Hd", "Jumbo Tv Fantastik Hd",
      "Jumbo Tv Dram Hd", "Jumbo Tv Cocuk Hd", "Jumbo Tv Biyografi Hd", "Jumbo Tv Bilim-Kurgu Hd",
      "Jumbo Tv Aksiyon Hd", "Jumbo Tv Turk Hd", "Jumbo Tv Yesilcam Hd", "Jumbo Tv Savas Hd",
      "Jumbo Tv Spor Hd", "Jumbo Tv Western Hd", "Loca 1 Hd", "Loca 2 Hd", "Loca 3 Hd",
      "Medo Tv Mix 1", "Medo Tv Mix 2", "Medo Tv Mix 3", "Medo Tv Mix 4", "Medo Tv Mix 5",
      "Medo Tv Mix 6", "Medo Tv Mix 7", "Medo Tv Mix 10", "Medo Tv Korku 1", "Medo Tv Komedi 1",
      "Medo Tv Drama 1", "Medo Tv Western", "Medo Tv Bilimkurgu 1", "Medo Tv Animasyon 1",
      "Medo Tv Aksiyon 1", "Medo Tv Aksiyon 2", "Medo Tv Aksiyon 3", "Medo Tv Aksiyon 4",
      "Medo Tv Turk Sinema 1", "Medo Tv Turk Sinema 2", "Medo Tv Turk Sinema 3", "Medo Tv Turk Sinema 4",
      "Medo Tv Turk Sinema 5", "Yesil Sinema Tv", "Eno Turk 1", "Metropol Turk", "Metropol Netflix 1",
      "Metropol Kukuli", "Metropol Kare", "Metropol Akilli Tavsan Momo", "Elit Yesilcam 3 Hd",
      "Elit Smart Turk Hd", "Elit Smart Platin Hd", "Elit Smart Fest Hd", "Elit Smart Family Hd",
      "Elit Smart Action Hd", "Elit Sinema Yerli Hd", "Elit Sinema Yerli 2 Hd", "Elit Sinema Tv Hd",
      "Elit Sinema Tv 2 Hd", "Elit Sinema Komedi Hd", "Elit Sinema Komedi 2 Hd", "Elit Sinema Aksiyon Hd",
      "Elit Sinema Aksiyon 2 Hd", "Elit Sinema Aile Hd", "Elit Sinema Aile 2 Hd", "Elit Niloya Tv",
      "Elit Netflix 1 Hd", "Elit Netflix 2 Hd", "Elit Netflix 3 Hd", "Elit Movies Premier Hd",
      "Elit Movies Premier 2 Hd", "Elit Movies Festival Hd", "Elit Movies Family Hd",
      "Elit Masa Ile Koca Ayi", "Elit Kemal Sunal", "Elit Hd Cocuk", "Elit Hd Animasyon 3",
      "Elit Hd Animasyon 2", "Elit Hd Animasyon 1", "Elit Box Office 1 Hd", "Elit Box Office 2 Hd",
      "Elit Box Office 3 Hd", "Elit Akilli Tavsan Momo", "Boss Movies 1 Hd", "Boss Movies 2 Hd",
      "Boss Movies 3 Hd", "Boss Movies 4 Hd", "Boss Movies 5 Hd", "Boss Movies 6 Hd", "Boss Movies 7 Hd",
      "Boss Movies 8 Hd", "Boss Movies 9 Hd", "Boss Movies 10 Hd", "Boss Movies Kemal Sunal",
      "Eno Animasyon", "Eno Western", "Eno Vizyon 1", "Eno Vizyon 2", "Eno Vizyon 3", "Eno Vizyon 4",
      "Eno Vizyon 5", "Eno Vizyon 6", "Eno Vizyon 7", "Eno Vizyon 8", "Eno Vizyon 9", "Eno Vizyon 10",
      "Eno Vizyon 11", "Eno Vizyon 12", "Eno Vizyon 13", "Eno Vizyon 14", "Eno Vizyon 15",
      "Black Tv 4k Hd", "Black Tv Action Hd", "Black Tv Comedy Hd", "Black Tv Love Hd", "Black Tv Oscar Hd",
      "Black Tv Premier Hd", "Black Tv Turk Hd", "Black Tv Vizyon Hd", "Black Tv Vizyon 2 Hd",
      "Black Tv Documentary Hd", "Black Tv Drama Hd", "Black Tv Horror Hd", "Black Tv West Hd",
      "Sinema Tv Aile 2 Hd", "Sinema Tv Aile Hd", "Sinema Tv Yerli Hd", "Sinema Tv Yerli 2 Hd",
      "Sinema Tv Komedi Hd", "Sinema Tv Hd", "Sinema Tv Action Hd", "Sinema Tv Komedi 2 Hd",
      "Kemal Sunal Tv 4k", "Sinema Tv Aksiyon Hd", "Dizismart Max Hd", "Mavi Karadeniz Tv",
      "Blumax Hd Kemal Sunal 1", "Blumax Hd Kemal Sunal 2", "Blumax Hd Kemal Sunal 3",
      "Blumax Hd Kemal Sunal 4", "Blumax Hd Kemal Sunal 5", "Blumax Hd Kemal Sunal 6",
      "Corona Virus Info", "Trt 1 Hd", "Trt 2 Hd", "Show Hd", "Kanal D Hd", "Atv Hd", "Star Hd",
      "Fox Hd", "Beyaz Hd", "Tv 8 Hd", "Tv 8.5 Hd", "Kanal 7 Hd", "Trt 4k", "Trt 4k+", "Trt 1 Uhd",
      "Trt 2 Uhd", "Show Uhd", "Kanal D Uhd", "Atv Uhd", "Star Uhd", "Fox Uhd", "Beyaz Uhd",
      "Tv 8 Uhd", "Tv 8.5 Uhd", "Kanal 7 Uhd", "360 Tv Uhd", "Dmax Uhd", "A2 Uhd", "Teve 2 Uhd",
      "Yaban Tv Hd", "Show Max", "Ekoturk", "Ege Tv", "Kardelen Tv", "Hrt Akdeniz Tv", "Kanal 68",
      "Diyanet Tv Uhd", "Akit Tv Uhd", "On 4 Tv", "Rehber Tv", "Semerkand Tv Uhd", "Dost Tv",
      "Al Quran Tv", "Kabe Tv Uhd", "Bein Sports 1 Hd", "Bein Sports 2 Hd", "Bein Sports 3 Hd",
      "Bein Sports 4 Hd", "Bein Sports 1 Sd", "Bein Sports 1 Uhd", "Bein Sports 2 Uhd",
      "Bein Sports 3 Uhd", "Bein Sports 4 Uhd", "Bein Sports 1 Hd+", "Bein Max 1 Hd", "Bein Max 2 Hd",
      "Bein Sports Haber Uhd", "Spor Smart Hd", "Sports Tv", "Saran Sport Hd", "Saran Sport 2 Hd",
      "Tivibu Spor Uhd", "Tivibu Spor 1 Hd", "Tivibu Spor 2 Hd", "Tivibu Spor 3 Hd", "Tay Tv Hd Plus",
      "Trt Spor Hd", "Trt Spor 2 Hd+", "Trt Spor Uhd", "A Spor Hd", "A Spor Uhd", "Gs Tv",
      "Trt Spor 2 Hd", "Fb Tv Hd Plus", "Bjk Tv", "Eurosport 1 Hd", "Eurosport 2 Hd", "Nba Hd",
      "Fight Box Hd", "Trt Haber Uhd", "Cnn Turk Uhd", "Ntv Uhd", "24 Haber Uhd", "Haber Global Uhd",
      "Eko Turk Tv", "Tv Net Uhd", "Ulke Tv Uhd", "A Haber Uhd", "Tv 100 Uhd", "Koy Tv",
      "Bloomberg Ht Uhd", "A Para Uhd", "Trt World Uhd", "A News Uhd", "Ulusal Kanal", "Halk Tv Hd+",
      "Tgrt Haber", "Tele 1", "Uzay Haber", "Kanal B", "Krt Uhd", "Haber Turk Uhd", "Yol Tv",
      "Arti Tv Hd", "Mc Eu", "Can Tv Hd", "Crystal Masha And The Bear", "Crystal Shaun The Sheep",
      "Crystal Movies Animation", "Crystal Pijamaskeliler", "Trt Cocuk Uhd", "Minika Go",
      "Minika Cocuk", "Nick Jr", "Nickelodeon Hd", "Disney Xd", "Disney Jr Hd", "Disney Channel",
      "Cartoon Network", "Boomerang Hd", "Baby Tv", "Tom Ve Jerry", "Niloya Tv",
      "Trt Eba Tv Hd Ilkokul", "Smart Cocuk Hd", "Trt Eba Tv Hd Ortaokul"
    ]
  },
  {
    name: "Arabisch",
    icon: "🇸🇦",
    channels: [
      "AR MBC 1 HD", "AR MBC 1 FHD", "AR MBC 2 HD", "AR MBC 2 FHD", "AR MBC 3 HD", "AR MBC 4 HD",
      "AR MBC 5 HD", "AR MBC Action HD", "AR MBC Action FHD", "AR MBC Drama HD", "AR MBC Drama FHD",
      "AR MBC Max HD", "AR MBC Max FHD", "AR MBC Masr HD", "AR MBC Masr 2 HD", "AR MBC Iraq HD",
      "AR MBC Bollywood HD", "AR MBC Persia HD", "AR MBC Variety HD", "AR Shahid HD",
      "AR beIN Sports 1 AR HD", "AR beIN Sports 1 AR FHD", "AR beIN Sports 2 AR HD", "AR beIN Sports 2 AR FHD",
      "AR beIN Sports 3 AR HD", "AR beIN Sports 3 AR FHD", "AR beIN Sports 4 AR HD", "AR beIN Sports 5 AR HD",
      "AR beIN Sports 6 AR HD", "AR beIN Sports 7 AR HD", "AR beIN Sports 8 AR HD", "AR beIN Sports 9 AR HD",
      "AR beIN Sports News AR HD", "AR beIN Sports Extra 1 HD", "AR beIN Sports Extra 2 HD",
      "AR beIN Sports Premium 1 HD", "AR beIN Sports Premium 1 FHD", "AR beIN Sports Premium 2 HD",
      "AR beIN Sports Premium 3 HD", "AR beIN Sports AFC HD", "AR beIN Movies 1 HD", "AR beIN Movies 2 HD",
      "AR beIN Movies 3 HD", "AR beIN Movies 4 HD", "AR beIN Drama HD", "AR beIN Gourmand HD",
      "AR OSN Movies HD", "AR OSN Movies FHD", "AR OSN Movies Action HD", "AR OSN Movies First HD",
      "AR OSN Movies First+ HD", "AR OSN Movies Kids HD", "AR OSN Movies Comedy HD",
      "AR OSN Series HD", "AR OSN Series FHD", "AR OSN Series First HD", "AR OSN Ya Hala HD",
      "AR OSN Yahala Cinema HD", "AR OSN Living HD", "AR OSN News HD", "AR OSN Hekayat HD",
      "AR Al Jazeera HD", "AR Al Jazeera FHD", "AR Al Jazeera English HD", "AR Al Jazeera Mubasher HD",
      "AR Al Jazeera Documentary HD", "AR Al Arabiya HD", "AR Al Arabiya FHD", "AR Al Hadath HD",
      "AR Sky News Arabia HD", "AR Sky News Arabia FHD", "AR BBC Arabic HD", "AR France 24 Arabic HD",
      "AR Dubai TV HD", "AR Dubai One HD", "AR Dubai Sports 1 HD", "AR Dubai Sports 2 HD",
      "AR Dubai Racing HD", "AR Sama Dubai HD", "AR Abu Dhabi TV HD", "AR Abu Dhabi Sports 1 HD",
      "AR Abu Dhabi Sports 2 HD", "AR Abu Dhabi Drama HD", "AR Al Emarat HD", "AR Sharjah TV HD",
      "AR Saudi TV 1 HD", "AR Saudi TV 2 HD", "AR Saudi Sports 1 HD", "AR Saudi Sports 2 HD",
      "AR SBC HD", "AR MBC Saudi HD", "AR Kuwait TV 1 HD", "AR Kuwait TV 2 HD", "AR Kuwait Sports HD",
      "AR Bahrain TV HD", "AR Oman TV HD", "AR Oman Sports HD", "AR Qatar TV HD", "AR Al Kass Sports HD",
      "AR Rotana Cinema HD", "AR Rotana Cinema FHD", "AR Rotana Classic HD", "AR Rotana Khalijia HD",
      "AR Rotana Music HD", "AR Rotana Clip HD", "AR Mazzika HD", "AR Melody Drama HD",
      "AR Zee Alwan HD", "AR Zee Aflam HD", "AR Star Plus Arabic HD", "AR Colors Arabic HD",
      "AR B4U Aflam HD", "AR B4U Plus HD", "AR MBC Wanasah HD", "AR Panorama Drama HD",
      "AR Spacetoon HD", "AR Cartoon Network AR HD", "AR Disney Channel AR HD", "AR CN Arabia HD",
      "AR National Geographic AR HD", "AR Discovery Channel AR HD", "AR TLC AR HD", "AR History AR HD",
      "AR Animal Planet AR HD", "AR Fatafeat HD", "AR CBN Arabia HD"
    ]
  },
  {
    name: "Israël",
    icon: "🇮🇱",
    channels: [
      "IL Channel 11 HD", "IL Channel 12 HD", "IL Channel 13 HD", "IL Kan 11 HD",
      "IL Keshet 12 HD", "IL Reshet 13 HD", "IL Sport 1 HD", "IL Sport 2 HD",
      "IL Sport 3 HD", "IL Sport 4 HD", "IL Sport 5 HD", "IL HOT Cinema 1 HD"
    ]
  },
  {
    name: "Iran",
    icon: "🇮🇷",
    channels: [
      "IR IRIB TV1 HD", "IR IRIB TV2 HD", "IR IRIB TV3 HD", "IR IRIB Varzesh HD",
      "IR IRIB Nasim HD", "IR IRIB Tamasha HD", "IR IRIB Amouzesh HD", "IR IRIB Ofogh HD",
      "IR GEM TV HD", "IR Manoto HD", "IR Iran International HD", "IR BBC Persian HD"
    ]
  },
  {
    name: "Koeweit",
    icon: "🇰🇼",
    channels: [
      "KW KTV 1 HD", "KW KTV 2 HD", "KW KTV Sport HD", "KW Al Rai TV HD", "KW Scope TV HD",
      "KW Funoon HD", "KW Al Watan HD", "KW Marina FM TV HD"
    ]
  },
  {
    name: "Qatar",
    icon: "🇶🇦",
    channels: [
      "QA Al Jazeera Arabic HD", "QA Al Jazeera English HD", "QA beIN Sports 1 HD", "QA beIN Sports 2 HD",
      "QA beIN Sports 3 HD", "QA Qatar TV HD", "QA Al Rayyan HD", "QA Al Kass Sports HD"
    ]
  },
  {
    name: "Verenigde Arabische Emiraten",
    icon: "🇦🇪",
    channels: [
      "AE Dubai TV HD", "AE Dubai One HD", "AE Abu Dhabi TV HD", "AE Abu Dhabi Sports 1 HD",
      "AE Abu Dhabi Sports 2 HD", "AE Al Emarat HD", "AE Sharjah TV HD", "AE Dubai Sports HD"
    ]
  },
  {
    name: "Egypte",
    icon: "🇪🇬",
    channels: [
      "EG Channel 1 HD", "EG Nile TV HD", "EG CBC HD", "EG CBC Drama HD", "EG ON E HD",
      "EG ON Drama HD", "EG MBC Masr HD", "EG Al Nahar HD", "EG ON Sport HD",
      "EG beIN Sports Egypt HD", "EG DMC HD", "EG DMC Drama HD"
    ]
  },
  {
    name: "Libanon",
    icon: "🇱🇧",
    channels: [
      "LB LBC HD", "LB MTV Lebanon HD", "LB Al Jadeed HD", "LB OTV HD", "LB Tele Liban HD",
      "LB NBN HD", "LB Al Manar HD", "LB Future TV HD"
    ]
  },
  {
    name: "Jordanië",
    icon: "🇯🇴",
    channels: [
      "JO Jordan TV HD", "JO Al Mamlaka TV HD", "JO Roya TV HD", "JO Jordan Sport HD"
    ]
  },
  {
    name: "Irak",
    icon: "🇮🇶",
    channels: [
      "IQ Al Iraqiya HD", "IQ Al Sharqiya HD", "IQ Dijlah TV HD", "IQ UTV HD",
      "IQ Rudaw HD", "IQ Kurdistan 24 HD", "IQ NRT HD"
    ]
  },
  // === ASIA ===
  {
    name: "India",
    icon: "🇮🇳",
    channels: [
      "IN Star Plus HD", "IN Star Plus FHD", "IN Star Bharat HD", "IN Star Pravah HD",
      "IN Star Vijay HD", "IN Asianet HD", "IN Asianet Plus HD", "IN Star Maa HD",
      "IN Sony TV HD", "IN Sony TV FHD", "IN Sony SAB HD", "IN Sony Pal HD", "IN Sony Aath HD",
      "IN SET HD", "IN Sony Entertainment Television HD", "IN Sony Marathi HD",
      "IN Zee TV HD", "IN Zee TV FHD", "IN Zee Cinema HD", "IN Zee Cinema FHD", "IN Zee Action HD",
      "IN Zee Anmol HD", "IN Zee Bangla HD", "IN Zee Marathi HD", "IN Zee Tamil HD", "IN Zee Telugu HD",
      "IN Zee Kannada HD", "IN Zee Punjabi HD", "IN &TV HD", "IN &Pictures HD", "IN Zee Cafe HD",
      "IN Colors HD", "IN Colors FHD", "IN Colors Infinity HD", "IN Colors Cineplex HD",
      "IN Colors Gujarati HD", "IN Colors Kannada HD", "IN Colors Marathi HD", "IN Colors Tamil HD",
      "IN Colors Bangla HD", "IN Rishtey HD", "IN MTV India HD", "IN MTV Beats HD", "IN Comedy Central IN HD",
      "IN Star Sports 1 HD", "IN Star Sports 1 FHD", "IN Star Sports 2 HD", "IN Star Sports 3 HD",
      "IN Star Sports 1 Hindi HD", "IN Star Sports 1 Tamil HD", "IN Star Sports 1 Telugu HD",
      "IN Star Sports 1 Kannada HD", "IN Star Sports 1 Bangla HD", "IN Star Sports Select 1 HD",
      "IN Star Sports Select 2 HD", "IN Star Sports First HD", "IN ESPN IN HD",
      "IN Sony Ten 1 HD", "IN Sony Ten 1 FHD", "IN Sony Ten 2 HD", "IN Sony Ten 2 FHD",
      "IN Sony Ten 3 HD", "IN Sony Ten 4 HD", "IN Sony Six HD", "IN Sony ESPN HD",
      "IN DD Sports HD", "IN DD National HD", "IN DD News HD", "IN DD Bharati HD", "IN DD India HD",
      "IN Star Gold HD", "IN Star Gold FHD", "IN Star Gold 2 HD", "IN Star Movies HD", "IN Star Movies FHD",
      "IN Star Movies Select HD", "IN Star World HD", "IN Star World Premiere HD", "IN Fox Life IN HD",
      "IN Sony Max HD", "IN Sony Max FHD", "IN Sony Max 2 HD", "IN Sony Wah HD", "IN Sony Pix HD",
      "IN Sony BBC Earth HD", "IN Sony LIV HD", "IN Zee Bollywood HD", "IN Zee Classic HD",
      "IN &Xplor HD", "IN HBO India HD", "IN Movies Now HD", "IN MNX HD", "IN Romedy Now HD",
      "IN AXN India HD", "IN FX IN HD", "IN Comedy Central India HD", "IN Colors Rishtey HD",
      "IN Aaj Tak HD", "IN ABP News HD", "IN NDTV India HD", "IN NDTV 24x7 HD", "IN NDTV Profit HD",
      "IN Republic TV HD", "IN Republic Bharat HD", "IN Times Now HD", "IN Mirror Now HD",
      "IN India Today HD", "IN News18 India HD", "IN Zee News HD", "IN CNN News18 HD", "IN CNBC TV18 HD",
      "IN WION HD", "IN ET Now HD", "IN DD Kisan HD", "IN Rajya Sabha TV HD", "IN Lok Sabha TV HD",
      "IN Nick India HD", "IN Nick Jr India HD", "IN Sonic HD", "IN Disney Channel India HD",
      "IN Disney Junior India HD", "IN Disney XD India HD", "IN Cartoon Network India HD",
      "IN Pogo HD", "IN Hungama HD", "IN Discovery India HD", "IN Discovery Science IN HD",
      "IN Animal Planet India HD", "IN TLC India HD", "IN National Geographic India HD",
      "IN Nat Geo Wild India HD", "IN History TV18 HD", "IN Sony Yay HD", "IN Super Hungama HD"
    ]
  },
  {
    name: "Pakistan",
    icon: "🇵🇰",
    channels: [
      "PK PTV Home HD", "PK PTV News HD", "PK PTV Sports HD", "PK ARY Digital HD",
      "PK GEO TV HD", "PK HUM TV HD", "PK Dunya News HD", "PK Express News HD",
      "PK Ten Sports PK HD", "PK A Sports HD", "PK ARY News HD", "PK Samaa TV HD"
    ]
  },
  {
    name: "Bangladesh",
    icon: "🇧🇩",
    channels: [
      "BD BTV HD", "BD Channel i HD", "BD ATN Bangla HD", "BD NTV HD", "BD Somoy TV HD",
      "BD RTV HD", "BD Ekattor TV HD", "BD Gazi TV HD", "BD T Sports HD"
    ]
  },
  {
    name: "Sri Lanka",
    icon: "🇱🇰",
    channels: [
      "LK Rupavahini HD", "LK ITN HD", "LK Sirasa TV HD", "LK Hiru TV HD", "LK Swarnavahini HD",
      "LK TV Derana HD", "LK Siyatha TV HD", "LK Ada Derana HD"
    ]
  },
  {
    name: "Nepal",
    icon: "🇳🇵",
    channels: [
      "NP Nepal TV HD", "NP Kantipur TV HD", "NP AP1 TV HD", "NP News24 HD", "NP ABC Television HD"
    ]
  },
  {
    name: "Afghanistan",
    icon: "🇦🇫",
    channels: [
      "AF Tolo TV HD", "AF 1TV HD", "AF Ariana TV HD", "AF Shamshad TV HD", "AF Lemar TV HD",
      "AF Khurshid TV HD", "AF RTA HD"
    ]
  },
  {
    name: "Thailand",
    icon: "🇹🇭",
    channels: [
      "TH Thai PBS HD", "TH Channel 3 HD", "TH Channel 7 HD", "TH One31 HD", "TH GMM25 HD",
      "TH Workpoint HD", "TH True4U HD", "TH PPTV HD", "TH Thairath TV HD",
      "TH True Premier HD", "TH Fox Sports TH HD", "TH beIN Sports TH HD"
    ]
  },
  {
    name: "Maleisië",
    icon: "🇲🇾",
    channels: [
      "MY TV1 HD", "MY TV2 HD", "MY TV3 HD", "MY ntv7 HD", "MY 8TV HD",
      "MY TV9 HD", "MY Astro Arena HD", "MY Astro SuperSport HD", "MY Astro SuperSport 2 HD",
      "MY Astro Awani HD", "MY Astro Ria HD", "MY Astro Prima HD"
    ]
  },
  {
    name: "Indonesië",
    icon: "🇮🇩",
    channels: [
      "ID RCTI HD", "ID SCTV HD", "ID Indosiar HD", "ID Trans TV HD", "ID Trans7 HD",
      "ID ANTV HD", "ID tvOne HD", "ID Metro TV HD", "ID Kompas TV HD", "ID NET HD",
      "ID MNC Sports HD", "ID O Channel HD", "ID beIN Sports ID HD"
    ]
  },
  {
    name: "Filipijnen",
    icon: "🇵🇭",
    channels: [
      "PH ABS-CBN HD", "PH GMA HD", "PH TV5 HD", "PH GMA News HD", "PH CNN Philippines HD",
      "PH One Sports HD", "PH NBA Premium HD", "PH Cignal HD"
    ]
  },
  {
    name: "Vietnam",
    icon: "🇻🇳",
    channels: [
      "VN VTV1 HD", "VN VTV2 HD", "VN VTV3 HD", "VN VTV6 HD", "VN HTV7 HD",
      "VN HTV9 HD", "VN VTC1 HD", "VN VTC3 HD", "VN K+ Sport 1 HD", "VN K+ Sport 2 HD"
    ]
  },
  {
    name: "Singapore",
    icon: "🇸🇬",
    channels: [
      "SG Channel 5 HD", "SG Channel 8 HD", "SG Channel U HD", "SG CNA HD", "SG Suria HD",
      "SG Vasantham HD", "SG beIN Sports SG HD", "SG Hub Sports 1 HD", "SG Hub Sports 2 HD"
    ]
  },
  {
    name: "Japan",
    icon: "🇯🇵",
    channels: [
      "JP NHK G HD", "JP NHK E HD", "JP Nippon TV HD", "JP TV Asahi HD", "JP TBS HD",
      "JP Fuji TV HD", "JP TV Tokyo HD", "JP NHK BS1 HD", "JP NHK BS Premium HD",
      "JP WOWOW Prime HD", "JP WOWOW Cinema HD", "JP J Sports 1 HD", "JP J Sports 2 HD"
    ]
  },
  {
    name: "Zuid-Korea",
    icon: "🇰🇷",
    channels: [
      "KR KBS1 HD", "KR KBS2 HD", "KR MBC HD", "KR SBS HD", "KR EBS HD",
      "KR JTBC HD", "KR tvN HD", "KR OCN HD", "KR Mnet HD", "KR YTN HD",
      "KR SBS Sports HD", "KR KBS N Sports HD", "KR MBC Sports+ HD"
    ]
  },
  {
    name: "China",
    icon: "🇨🇳",
    channels: [
      "CN CCTV-1 HD", "CN CCTV-2 HD", "CN CCTV-3 HD", "CN CCTV-4 HD", "CN CCTV-5 HD",
      "CN CCTV-5+ HD", "CN CCTV-6 HD", "CN CCTV-8 HD", "CN CCTV-13 HD",
      "CN Dragon TV HD", "CN Hunan TV HD", "CN Zhejiang TV HD", "CN Jiangsu TV HD"
    ]
  },
  {
    name: "Hong Kong",
    icon: "🇭🇰",
    channels: [
      "HK TVB Jade HD", "HK TVB Pearl HD", "HK ViuTV HD", "HK RTHK 31 HD", "HK RTHK 32 HD",
      "HK Now Sports HD", "HK Now Sports 2 HD", "HK beIN Sports HK HD"
    ]
  },
  {
    name: "Taiwan",
    icon: "🇹🇼",
    channels: [
      "TW TTV HD", "TW CTV HD", "TW CTS HD", "TW FTV HD", "TW TVBS HD",
      "TW TVBS News HD", "TW SET HD", "TW GTV HD", "TW Videoland HD", "TW FOX Sports TW HD"
    ]
  },
  // === AFRICA ===
  {
    name: "Zuid-Afrika",
    icon: "🇿🇦",
    channels: [
      "ZA SABC 1 HD", "ZA SABC 2 HD", "ZA SABC 3 HD", "ZA e.tv HD", "ZA M-Net HD",
      "ZA kykNET HD", "ZA SuperSport 1 HD", "ZA SuperSport 2 HD", "ZA SuperSport 3 HD",
      "ZA SuperSport 4 HD", "ZA SuperSport PSL HD", "ZA eNCA HD", "ZA Newzroom Afrika HD"
    ]
  },
  {
    name: "Nigeria",
    icon: "🇳🇬",
    channels: [
      "NG NTA HD", "NG Channels TV HD", "NG AIT HD", "NG TVC News HD", "NG Arise TV HD",
      "NG SuperSport NG HD", "NG GOtv Select HD"
    ]
  },
  {
    name: "Kenia",
    icon: "🇰🇪",
    channels: [
      "KE KTN HD", "KE Citizen TV HD", "KE NTV Kenya HD", "KE K24 HD", "KE KBC HD",
      "KE SuperSport KE HD", "KE KTN News HD"
    ]
  },
  {
    name: "Ghana",
    icon: "🇬🇭",
    channels: [
      "GH GTV HD", "GH TV3 Ghana HD", "GH UTV HD", "GH Joy News HD", "GH Adom TV HD",
      "GH Peace FM TV HD", "GH GHOne TV HD"
    ]
  },
  {
    name: "Marokko",
    icon: "🇲🇦",
    channels: [
      "MA Al Aoula HD", "MA 2M HD", "MA Medi1 TV HD", "MA Arryadia HD", "MA Arryadia 2 HD",
      "MA Arryadia 3 HD", "MA Tamazight HD", "MA Aflam TV HD", "MA beIN Sports MA HD"
    ]
  },
  {
    name: "Algerije",
    icon: "🇩🇿",
    channels: [
      "DZ ENTV HD", "DZ Canal Algérie HD", "DZ Echorouk TV HD", "DZ Ennahar TV HD",
      "DZ El Djazairia One HD", "DZ Samira TV HD", "DZ beIN Sports DZ HD"
    ]
  },
  {
    name: "Tunesië",
    icon: "🇹🇳",
    channels: [
      "TN Watania 1 HD", "TN Watania 2 HD", "TN Nessma TV HD", "TN Hannibal TV HD",
      "TN Attessia TV HD", "TN El Hiwar Ettounsi HD", "TN beIN Sports TN HD"
    ]
  },
  {
    name: "Ethiopië",
    icon: "🇪🇹",
    channels: [
      "ET EBC HD", "ET Fana TV HD", "ET EBS TV HD", "ET Kana TV HD", "ET JTV HD",
      "ET Walta TV HD", "ET LTV HD"
    ]
  },
  // === OCEANIA ===
  {
    name: "Australië",
    icon: "🇦🇺",
    channels: [
      "AU ABC HD", "AU Nine HD", "AU Seven HD", "AU Ten HD", "AU SBS HD",
      "AU ABC News HD", "AU Sky News AU HD", "AU Fox Sports 503 HD", "AU Fox Sports 504 HD",
      "AU Fox Sports 505 HD", "AU Fox Sports 506 HD", "AU beIN Sports 1 AU HD",
      "AU beIN Sports 2 AU HD", "AU ESPN AU HD", "AU Kayo Sports HD"
    ]
  },
  {
    name: "Nieuw-Zeeland",
    icon: "🇳🇿",
    channels: [
      "NZ TVNZ 1 HD", "NZ TVNZ 2 HD", "NZ Three HD", "NZ Māori TV HD", "NZ Prime HD",
      "NZ Sky Sport 1 NZ HD", "NZ Sky Sport 2 NZ HD", "NZ Sky Sport 3 NZ HD",
      "NZ Spark Sport HD", "NZ ESPN NZ HD"
    ]
  },
  // === CARIBBEAN ===
  {
    name: "Suriname",
    icon: "🇸🇷",
    channels: [
      "SR STVS HD", "SR ATV HD", "SR Apintie TV HD", "SR ABC HD", "SR Garuda TV HD",
      "SR SCCN HD", "SR RBN HD"
    ]
  },
  {
    name: "Curaçao",
    icon: "🇨🇼",
    channels: [
      "CW TeleCuraçao HD", "CW Curom TV HD", "CW Extra TV HD", "CW TV Direct HD"
    ]
  },
  {
    name: "Aruba",
    icon: "🇦🇼",
    channels: [
      "AW Telearuba HD", "AW ATV Aruba HD", "AW Canal 22 HD"
    ]
  },
  {
    name: "Jamaica",
    icon: "🇯🇲",
    channels: [
      "JM TVJ HD", "JM CVM TV HD", "JM RETV HD", "JM Hype TV HD", "JM LOVE TV HD"
    ]
  },
  {
    name: "Trinidad en Tobago",
    icon: "🇹🇹",
    channels: [
      "TT TTT HD", "TT CNC3 HD", "TT TV6 HD", "TT CCN TV6 HD", "TT Synergy TV HD"
    ]
  }
];

export const Channels: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      return newSet;
    });
  };

  const CATEGORY_ORDER = [
    "Nederland", "België", "Frankrijk", "Duitsland", "Kinderen", "Spanje",
    "Denemarken", "Verenigd Koninkrijk", "Verenigde Staten", "Italië",
    "Portugal", "Turkije", "Sport", "Films & Series", "Nieuws",
    "Formule 1 & Motorsport", "Documentaire", "Muziek", "Arabisch",
    "Polen", "Griekenland", "Zweden", "Noorwegen", "Finland", "Oostenrijk",
    "Zwitserland", "Roemenië", "Hongarije", "Tsjechië", "Slowakije",
    "Kroatië", "Servië", "Bulgarije", "Slovenië", "Bosnië", "Noord-Macedonië",
    "Albanië", "Kosovo", "Montenegro", "Oekraïne", "Rusland", "Ierland",
    "IJsland", "Luxemburg", "Malta", "Cyprus", "Letland", "Litouwen", "Estland",
    "Canada", "Mexico", "Brazilië", "Argentinië", "Colombia", "Chili", "Peru",
    "Venezuela", "Ecuador", "Israël", "Iran", "Koeweit", "Qatar",
    "Verenigde Arabische Emiraten", "Egypte", "Libanon", "Jordanië", "Irak",
    "India", "Pakistan", "Bangladesh", "Sri Lanka", "Nepal", "Afghanistan",
    "Thailand", "Maleisië", "Indonesië", "Filipijnen", "Vietnam", "Singapore",
    "Japan", "Zuid-Korea", "China", "Hong Kong", "Taiwan",
    "Zuid-Afrika", "Nigeria", "Kenia", "Ghana", "Marokko", "Algerije",
    "Tunesië", "Ethiopië", "Australië", "Nieuw-Zeeland",
    "Suriname", "Curaçao", "Aruba", "Jamaica", "Trinidad en Tobago"
  ];

  const filteredCategories = CHANNEL_CATEGORIES.filter(category => {
    if (selectedCategory && category.name !== selectedCategory) return false;
    if (searchQuery) {
      const matchesCategory = category.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesChannels = category.channels.some(ch =>
        ch.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return matchesCategory || matchesChannels;
    }
    return true;
  }).sort((a, b) => {
    const indexA = CATEGORY_ORDER.indexOf(a.name);
    const indexB = CATEGORY_ORDER.indexOf(b.name);
    if (indexA === -1 && indexB === -1) return 0;
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  const getFilteredChannels = (channels: string[]) => {
    if (!searchQuery) return channels;
    return channels.filter(ch => ch.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  const totalChannels = CHANNEL_CATEGORIES.reduce((sum, cat) => sum + cat.channels.length, 0);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-bold text-white/60 hover:text-white transition-colors mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Terug naar home
        </a>

        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-black tracking-tighter mb-4" style={{ color: '#0D1B3E' }}>
            Kanalen Lijst
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(13,27,62,0.7)' }}>
            Bekijk ons uitgebreide aanbod van <span className="font-bold" style={{ color: '#0D1B3E' }}>65.000+</span> kanalen uit meer dan 70 landen.
            Hieronder vind je een selectie van onze populairste kanalen.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="glass-card rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Zoek kanalen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
              />
            </div>
            <select
              value={selectedCategory || ''}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
              className="px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all cursor-pointer min-w-[200px]"
            >
              <option value="">Alle categorieën ({CHANNEL_CATEGORIES.length})</option>
              <optgroup label="📺 Categorieën">
                {CHANNEL_CATEGORIES.slice(0, 7).map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.icon} {cat.name}</option>
                ))}
              </optgroup>
              <optgroup label="🇪🇺 Europa">
                {CHANNEL_CATEGORIES.filter(cat =>
                  ["Nederland", "België", "Duitsland", "Verenigd Koninkrijk", "Frankrijk", "Spanje", "Italië", "Portugal", "Polen", "Griekenland", "Zweden", "Noorwegen", "Denemarken", "Finland", "Oostenrijk", "Zwitserland", "Roemenië", "Hongarije", "Tsjechië", "Slowakije", "Kroatië", "Servië", "Bulgarije", "Slovenië", "Bosnië", "Noord-Macedonië", "Albanië", "Kosovo", "Montenegro", "Oekraïne", "Rusland", "Ierland", "IJsland", "Luxemburg", "Malta", "Cyprus", "Letland", "Litouwen", "Estland"].includes(cat.name)
                ).map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.icon} {cat.name}</option>
                ))}
              </optgroup>
              <optgroup label="🌎 Amerika">
                {CHANNEL_CATEGORIES.filter(cat =>
                  ["Verenigde Staten", "Canada", "Mexico", "Brazilië", "Argentinië", "Colombia", "Chili", "Peru", "Venezuela", "Ecuador", "Suriname", "Curaçao", "Aruba", "Jamaica", "Trinidad en Tobago"].includes(cat.name)
                ).map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.icon} {cat.name}</option>
                ))}
              </optgroup>
              <optgroup label="🌍 Midden-Oosten & Afrika">
                {CHANNEL_CATEGORIES.filter(cat =>
                  ["Turkije", "Arabisch", "Israël", "Iran", "Koeweit", "Qatar", "Verenigde Arabische Emiraten", "Egypte", "Libanon", "Jordanië", "Irak", "Zuid-Afrika", "Nigeria", "Kenia", "Ghana", "Marokko", "Algerije", "Tunesië", "Ethiopië"].includes(cat.name)
                ).map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.icon} {cat.name}</option>
                ))}
              </optgroup>
              <optgroup label="🌏 Azië & Oceanië">
                {CHANNEL_CATEGORIES.filter(cat =>
                  ["India", "Pakistan", "Bangladesh", "Sri Lanka", "Nepal", "Afghanistan", "Thailand", "Maleisië", "Indonesië", "Filipijnen", "Vietnam", "Singapore", "Japan", "Zuid-Korea", "China", "Hong Kong", "Taiwan", "Australië", "Nieuw-Zeeland"].includes(cat.name)
                ).map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.icon} {cat.name}</option>
                ))}
              </optgroup>
            </select>
          </div>
          <div className="mt-4">
            <p className="text-xs text-gray-500 mb-2 font-medium">Snelle filters:</p>
            <div className="flex flex-wrap gap-2">
              {/* Ordered quick filters */}
              {["Nederland", "België", "Frankrijk", "Duitsland", "Kinderen", "Spanje", "Denemarken", "Verenigd Koninkrijk", "Verenigde Staten", "Italië", "Portugal", "Turkije", "Sport", "Films & Series", "Nieuws"].map(name => {
                const cat = CHANNEL_CATEGORIES.find(c => c.name === name);
                if (!cat) return null;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      selectedCategory === cat.name
                        ? 'bg-black text-white'
                        : 'bg-white/50 text-gray-700 hover:bg-white/80'
                    }`}
                  >
                    {cat.icon} {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass-card rounded-xl p-4 text-center">
            <div className="text-3xl font-black text-black">65.000+</div>
            <div className="text-sm text-gray-600 font-medium">Kanalen</div>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <div className="text-3xl font-black text-black">70+</div>
            <div className="text-sm text-gray-600 font-medium">Landen</div>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <div className="text-3xl font-black text-black">4K</div>
            <div className="text-sm text-gray-600 font-medium">Ultra HD</div>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <div className="text-3xl font-black text-black">99.9%</div>
            <div className="text-sm text-gray-600 font-medium">Uptime</div>
          </div>
        </div>

        {/* Channel Categories */}
        <div className="space-y-4">
          {filteredCategories.map(category => {
            const channelsToShow = getFilteredChannels(category.channels);
            if (channelsToShow.length === 0) return null;
            const isExpanded = expandedCategories.has(category.name);

            return (
              <div key={category.name} className="glass-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full p-4 lg:p-6 flex items-center gap-2 sm:gap-3 hover:bg-white/20 transition-colors text-left"
                >
                  <span className="text-2xl sm:text-3xl flex-shrink-0">{category.icon}</span>
                  <h2 className="text-base sm:text-xl lg:text-2xl font-extrabold text-black tracking-tight truncate">
                    {category.name}
                  </h2>
                  <span className="ml-auto flex items-center gap-1 sm:gap-3 flex-shrink-0">
                    <span className="bg-black text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                      {channelsToShow.length}
                      <span className="hidden sm:inline"> kanalen</span>
                    </span>
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="px-5 lg:px-6 pb-5 lg:pb-6 pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {channelsToShow.map((channel, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-2 bg-white/50 rounded-lg hover:bg-white/80 transition-colors"
                        >
                          <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                          <span className="text-sm font-medium text-gray-800 truncate">{channel}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 glass-card-dark rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">
            Klaar om te beginnen?
          </h3>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Krijg toegang tot al deze kanalen en meer. Start vandaag nog met IPTVNederland.
          </p>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
              setTimeout(() => {
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            Bekijk Pakketten
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
