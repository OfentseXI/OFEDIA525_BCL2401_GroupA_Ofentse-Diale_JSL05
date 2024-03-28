// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Depressed Jim Carrey/Clementine", artist: "Baldamar", genre: "R&B" },
    { title: "Fool for you", artist: "Kaidraroo", genre: "Pop" },
    { title: "Valentine's Curse", artist: "Banes World", genre: "R&B" },
    { title: "Running up that hill", artist: "Kate Bush", genre: "Pop" },
    { title: "Cocaine Sunday", artist: "Eyedress", genre: "Rock" },
];

// Object containing each Guardian's preferred genre
// Add preferences for Drax, Rocket, and Groot
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop",
};

// Function to generate playlist based on preferred genre
// Use the map() function to create playlists for each Guardian
// Your code here
function generatePlaylist(guardians, songs) {
    const playlists = {};
    Object.keys(guardians).forEach(guardian => {
      const preferredGenre = guardians[guardian];
      const playlist = songs.filter(song => song.genre === preferredGenre);
      playlists[guardian] = playlist.map(song => song.title);
    });
    return playlists;
}

// Call generatePlaylist
const playlists = generatePlaylist(guardians, songs);

// Display the playlists for each Guardian
const playlistsDiv = document.getElementById('playlists');
Object.keys(playlists).forEach((guardian) => {
  const playlistContainer = document.createElement("div");
  playlistContainer.classList.add("playlist");

  const playlistTitle = document.createElement("h2");
  playlistTitle.textContent = `${guardian}'s Playlist:`;
  playlistContainer.appendChild(playlistTitle);

  const playlistList = document.createElement("ul");
  playlists[guardian].forEach((song) => {
    const listItem = document.createElement("ul");
    const songTitle = document.createElement("span");
    songTitle.textContent = song;
    songTitle.style.textDecoration = "underline";
    songTitle.style.color = "yellow";
    songTitle.style.fontWeight = "bold";
    listItem.appendChild(songTitle);

    // Adding artist name
    // Appending artist name to the list item
    // Appending list item to the playlist list
    const songArtist = document.createElement("span");
    const artistName = songs.find((s) => s.title === song).artist;
    songArtist.textContent = " by " + artistName;
    listItem.appendChild(songArtist);
    playlistList.appendChild(listItem);
  });
  playlistContainer.appendChild(playlistList);
  playlistsDiv.appendChild(playlistContainer);
});
