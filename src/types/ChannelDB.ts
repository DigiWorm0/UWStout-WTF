import Channel from "./Channel";

const ChannelDB: Channel[] = [
    {
        number: "23-1",
        name: "PBS tpt",
        category: "Public",
        url: "https://www.tpt.org/",
    },
    {
        number: "23-2",
        name: "Fox 2548 & WIProud",
        category: "Local",
        url: "https://www.wiproud.com/fox-2548-programming/",
    },
    {
        number: "23-3",
        name: "NBC",
        category: "Local",
        url: "https://www.nbc.com/",
    },
    {
        number: "23-4",
        name: "News 8 Now",
        category: "Local",
        url: "https://www.news8000.com/",
    },
    {
        number: "23-5",
        name: "Fox 9+",
        category: "Local",
        url: "https://www.fox9.com/",
    },
    {
        number: "23-6",
        name: "ABC 18",
        category: "Local",
        url: "https://www.wqow.com/",
    },
    {
        number: "24-2",
        name: "ABC 5",
        category: "Local",
        url: "https://www.news5cleveland.com/abc-news",
    },
    {
        number: "25-1",
        name: "KARE 11",
        category: "Local",
        url: "https://www.kare11.com/",
    },
    {
        number: "25-2",
        name: "PBS Wisconsin",
        category: "Public",
        url: "https://pbswisconsin.org/",
    },
    {
        number: "26-1",
        name: "Fox 9",
        category: "Local",
        url: "https://www.fox9.com/",
    },
    {
        number: "26-2",
        name: "The CW (Twin Cities)",
        category: "Local",
        url: "https://thecwtc.com/",
    },
    {
        number: "27-1",
        name: "PBS Wisconsin",
        category: "Public",
        url: "https://pbswisconsin.org/",
    },
    {
        number: "27-2",
        name: "CMT",
        category: "Music",
        url: "https://www.cmt.com/",
    },
    {
        number: "27-3",
        name: "VH1",
        category: "Music",
        url: "https://www.vh1.com/",
    },
    {
        number: "28-1",
        name: "Oxygen",
        category: "Entertainment",
        url: "https://www.oxygen.com/",
    },
    {
        number: "28-2",
        name: "Lifetime",
        category: "Entertainment",
        url: "https://www.mylifetime.com/",
    },
    {
        number: "28-3",
        name: "Paramount Network",
        category: "Entertainment",
        url: "https://www.paramountnetwork.com/",
    },
    {
        number: "29-1",
        name: "ESPN*",
        category: "Sports",
        url: "https://www.espn.com/",
    },
    {
        number: "29-2",
        name: "ESPN2*",
        category: "Sports",
        url: "https://www.espn.com/",
    },
    {
        number: "30-1",
        name: "Bally Sports Wisconsin",
        category: "Sports",
        url: "https://www.ballysports.com/wisconsin/",
    },
    {
        number: "30-2",
        name: "NBC Golf",
        category: "Sports",
        url: "https://www.nbcsports.com/golf",
    },
    {
        number: "31-1",
        name: "NFL (Thursday Night Football)",
        category: "Sports",
        url: "https://www.nfl.com/",
    },
    {
        number: "31-2",
        name: "FS1",
        category: "Sports",
        url: "https://www.foxsports.com/",
    },
    {
        number: "32-1",
        name: "HGTV",
        category: "Home & Garden",
        url: "https://www.hgtv.com/",
    },
    {
        number: "32-2",
        name: "Food Network",
        category: "Home & Garden",
        url: "https://www.foodnetwork.com/",
    },
    {
        number: "32-3",
        name: "FX*",
        category: "Entertainment",
        url: "https://www.fxnetworks.com/",
    },
    {
        number: "33-1",
        name: "TNT",
        category: "Entertainment",
        url: "https://www.tntdrama.com/",
    },
    {
        number: "33-2",
        name: "TBS",
        category: "Entertainment",
        url: "https://www.tbs.com/",
    },
    {
        number: "34-1",
        name: "USA",
        category: "Entertainment",
        url: "https://www.usanetwork.com/",
    },
    {
        number: "34-2",
        name: "Syfy",
        category: "Entertainment",
        url: "https://www.syfy.com/",
    },
    {
        number: "34-3",
        name: "AMC",
        category: "Entertainment",
        url: "https://www.amc.com/",
    },
    {
        number: "35-2",
        name: "A&E",
        category: "Entertainment",
        url: "https://www.aetv.com/",
    },
    {
        number: "35-3",
        name: "Bravo",
        category: "Entertainment",
        url: "https://www.bravotv.com/",
    },
    {
        number: "36-1",
        name: "Freeform*",
        category: "Entertainment",
        url: "https://www.freeform.com/",
    },
    {
        number: "36-2",
        name: "TV Land",
        category: "Entertainment",
        url: "https://www.tvland.com/",
    },
    {
        number: "36-3",
        name: "MTV",
        category: "Music",
        url: "https://www.mtv.com/",
    },
    {
        number: "37-1",
        name: "Comedy Central",
        category: "Entertainment",
        url: "https://www.cc.com/",
    },
    {
        number: "37-2",
        name: "E!",
        category: "Entertainment",
        url: "https://www.eonline.com/",
    },
    {
        number: "37-3",
        name: "BET",
        category: "Entertainment",
        url: "https://www.bet.com/",
    },
    {
        number: "38-1",
        name: "truTV",
        category: "Entertainment",
        url: "https://www.trutv.com/",
    },
    {
        number: "38-2",
        name: "CNN",
        category: "News",
        url: "https://www.cnn.com/",
    },
    {
        number: "38-3",
        name: "HLN",
        category: "News",
        url: "https://www.hlntv.com/",
    },
    {
        number: "39-1",
        name: "CNBC",
        category: "News",
        url: "https://www.cnbc.com/",
    },
    {
        number: "39-2",
        name: "MSNBC",
        category: "News",
        url: "https://www.msnbc.com/",
    },
    {
        number: "39-3",
        name: "Fox News",
        category: "News",
        url: "https://www.foxnews.com/",
    },
    {
        number: "40-1",
        name: "Discovery",
        category: "Entertainment",
        url: "https://www.discovery.com/",
    },
    {
        number: "40-2",
        name: "National Geographic*",
        category: "Entertainment",
        url: "https://www.nationalgeographic.com/",
    },
    {
        number: "40-3",
        name: "Travel Channel",
        category: "Entertainment",
        url: "https://www.travelchannel.com/",
    },
    {
        number: "41-1",
        name: "TLC",
        category: "Entertainment",
        url: "https://www.tlc.com/",
    },
    {
        number: "41-2",
        name: "History",
        category: "Entertainment",
        url: "https://www.history.com/",
    },
    {
        number: "41-3",
        name: "Cartoon Network",
        category: "Kids",
        url: "https://www.cartoonnetwork.com/",
    },
    {
        number: "42-1",
        name: "Disney Channel*",
        category: "Kids",
        url: "https://www.disneychannel.com/",
    },
    {
        number: "42-2",
        name: "Nickelodeon",
        category: "Kids",
        url: "https://www.nick.com/",
    },
    {
        number: "42-3",
        name: "Animal Planet",
        category: "Entertainment",
        url: "https://www.animalplanet.com/",
    },
    {
        number: "43-1",
        name: "Big Ten Network",
        category: "Sports",
        url: "https://www.btn.com/",
    },
    {
        number: "43-2",
        name: "MLB Network",
        category: "Sports",
        url: "https://www.mlb.com/network",
    },
    {
        number: "44-1",
        name: "Animal Planet",
        category: "Entertainment",
        url: "https://www.animalplanet.com/",
    },
    {
        number: "44-2",
        name: "LMN",
        category: "Entertainment",
        url: "https://www.mylifetime.com/lmn",
    },
    {
        number: "44-3",
        name: "Game Show Network",
        category: "Entertainment",
        url: "https://www.gameshownetwork.com/",
    },
    {
        number: "45-1",
        name: "Disney XD*",
        category: "Kids",
        url: "https://www.disneyxd.com/",
    },
    {
        number: "45-2",
        name: "Investigation Discovery",
        category: "Entertainment",
        url: "https://www.investigationdiscovery.com/",
    },
    {
        number: "45-3",
        name: "OWN",
        category: "Entertainment",
        url: "https://www.oprah.com/own",
    },
    {
        number: "46-1",
        name: "The Weather Channel",
        category: "Weather",
        url: "https://www.weather.com/",
    },
    {
        number: "46-2",
        name: "EWTN",
        category: "Religious",
        url: "https://www.ewtn.com/",
    },
    {
        number: "46-4",
        name: "ION",
        category: "Entertainment",
        url: "https://www.iontelevision.com/",
    },
    {
        number: "46-7",
        name: "MTV U",
        category: "Music",
        url: "https://www.mtv.com/",
    },
    {
        number: "47-1",
        name: "MTV2",
        category: "Music",
        url: "https://www.mtv.com/",
    },
    {
        number: "47-2",
        name: "Big Ten Network (SD)",
        category: "Sports",
        url: "https://www.btn.com/",
    },
    {
        number: "47-3",
        name: "Big Ten Network (SD)",
        category: "Sports",
        url: "https://www.btn.com/",
    },
    {
        number: "47-4",
        name: "Bally Sports",
        category: "Sports",
        url: "https://www.ballysports.com/",
    },
    {
        number: "47-5",
        name: "Bally Sports (SD)",
        category: "Sports",
        url: "https://www.ballysports.com/",
    },
    {
        number: "48-1",
        name: "Music Choice - Hit List",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "48-2",
        name: "Music Choice - Music Choice Max",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "48-3",
        name: "Music Choice - Dance / EDM",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "48-4",
        name: "Music Choice - Indie",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "48-5",
        name: "Music Choice - Hip Hop / R&B",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "48-6",
        name: "Music Choice - Rap",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "48-7",
        name: "Music Choice - Hip Hop Classics",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "48-8",
        name: "Music Choice - Throwback Jams",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "48-9",
        name: "Music Choice - R&B Classics",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "48-10",
        name: "Music Choice - R&B Soul",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "48-11",
        name: "Music Choice - Gospel",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "48-12",
        name: "Music Choice - Reggae",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "49-1",
        name: "Music Choice - Rock",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "49-2",
        name: "Music Choice - Metal",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "49-3",
        name: "Music Choice - Alternative",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "49-4",
        name: "Music Choice - Adult Alternative",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "49-5",
        name: "Music Choice - Rock Hits",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "49-6",
        name: "Music Choice - Classic Rock",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "49-7",
        name: "Music Choice - Soft Rock",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "49-8",
        name: "Music Choice - Pop Hits",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "49-9",
        name: "Music Choice - Party Favorites",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "49-10",
        name: "Music Choice - Teen Beats",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "49-11",
        name: "Music Choice - Kids Only",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "49-12",
        name: "Music Choice - Toddler Tunes",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "50-1",
        name: "Music Choice - Y2K",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "50-2",
        name: "Music Choice - 90s",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "50-3",
        name: "Music Choice - 80s",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "50-4",
        name: "Music Choice - 70s",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "50-5",
        name: "Music Choice - Solid Gold Oldies",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "50-6",
        name: "Music Choice - Pop / Country",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "50-7",
        name: "Music Choice - Today's Country",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "50-8",
        name: "Music Choice - Country Hits",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "50-9",
        name: "Music Choice - Classic Country",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "50-10",
        name: "Music Choice - Contemporary Christian",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "50-11",
        name: "Music Choice - Pop Latino",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "50-12",
        name: "Music Choice - Musica Urbana",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "51-1",
        name: "Music Choice - Mexicana",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "51-2",
        name: "Music Choice - Topicales",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "51-3",
        name: "Music Choice - Sounds of the Season",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "51-4",
        name: "Music Choice - Stage & Screen",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "51-5",
        name: "Music Choice - Smooth Jazz",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "51-6",
        name: "Music Choice - Jazz",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "51-7",
        name: "Music Choice - Blues",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "51-8",
        name: "Music Choice - Singers & Swing",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "51-9",
        name: "Music Choice - Easy Listening",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "51-10",
        name: "Music Choice - Light Classical",
        category: "Music",
        url: "https://www.musicchoice.com/",
        logo: "mc",
    },
    {
        number: "52-1",
        name: "Heroes & Icons",
        category: "Entertainment",
        url: "https://www.handitv.com/",
    },
    {
        number: "52-2",
        name: "Charge!",
        category: "Entertainment",
        url: "https://watchcharge.com/",
    },
    {
        number: "52-3",
        name: "PBS WIS",
        category: "Entertainment",
        url: "https://www.pbswisconsin.org/",
    },
    {
        number: "52-4",
        name: "PBS Create",
        category: "Entertainment",
        url: "https://www.createtv.com/",
    },
    {
        number: "53-4",
        name: "Stockton Birthdays & News",
        category: "Local",
    },
    {
        number: "53-5",
        name: "NASA TV",
        category: "Local",
        url: "https://www.nasa.gov/multimedia/nasatv/",
    },
    {
        number: "53-6",
        name: "Valley Media Works",
        category: "Local",
        url: "http://www.valleymediaworks.org/",
    },
    {
        number: "53-7",
        name: "Valley Media Works",
        category: "Local",
        url: "http://www.valleymediaworks.org/",
    },
    {
        number: "54-1",
        name: "Pop",
        category: "Entertainment",
        url: "https://www.poptv.com/",
    },
    {
        number: "54-2",
        name: "WisEye",
        category: "Entertainment",
        url: "https://www.wiseye.org/",
    },
    {
        number: "54-3",
        name: "C-SPAN 3",
        category: "Entertainment",
        url: "https://www.c-span.org/",
    },
    {
        number: "54-4",
        name: "C-SPAN 2",
        category: "Entertainment",
        url: "https://www.c-span.org/",
    },
    {
        number: "55-1",
        name: "C-SPAN",
        category: "Entertainment",
        url: "https://www.c-span.org/",
    },
    {
        number: "55-2",
        name: "News Nation",
        category: "News",
        url: "https://www.newsnationnow.com/",
    },
    {
        number: "55-3",
        name: "The Weather Channel",
        category: "News",
        url: "https://weather.com/",
    },
    {
        number: "56-1",
        name: "Bally Sports",
        category: "Sports",
        url: "https://www.ballysports.com/",
    },
    {
        number: "56-2",
        name: "TBN",
        category: "Religious",
        url: "https://www.tbn.org/",
    },
    {
        number: "56-3",
        name: "Hallmark Movies & Mysteries",
        category: "Entertainment",
        url: "https://www.hallmarkmoviesandmysteries.com/",
    },
    {
        number: "57-1",
        name: "ESPN U*",
        category: "Sports",
        url: "https://www.espn.com/",
    },
    {
        number: "57-2",
        name: "Outdoor Channel",
        category: "Sports",
        url: "https://www.outdoorchannel.com/",
    },
    {
        number: "58-1",
        name: "Bally Sports Wisconsin",
        category: "Sports",
        url: "https://www.ballysports.com/",
    },
    {
        number: "58-2",
        name: "Bally Sports",
        category: "Sports",
        url: "https://www.ballysports.com/",
    }
];

export default ChannelDB;