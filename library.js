var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
   // console.log(this.playlists.p01.name);

   // FUNCTIONS TO IMPLEMENT:

   // prints a list of all playlists, in the form:
   // p01: Coding Music - 2 tracks
   // p02: Other Playlist - 1 tracks

   printPlaylists: function() {
     var printedPlaylists = '';
     for (var playlistKey in this.playlists) {
       const { id, name, tracks } = this.playlists[playlistKey];
       printedPlaylists += `${id}: ${name} - ${tracks.length} tracks.\n`;
     }
     return printedPlaylists;
   },

   // prints a list of all tracks, in the form:
   // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
   // t02: Model View Controller by James Dempsey (WWDC 2003)
   // t03: Four Thirty-Three by John Cage (Woodstock 1952)
   // var printFredTracks = function() {
   //   return Object.keys(this.tracks).map(function(trackKey,idx){
   //     const { id, name, artist, album } = this.tracks[trackKey];
   //     return `${id}: ${name} by ${artist} (${album})`
   //   }).join('\n')
   // }

   printTracks: function() {
     var printedTracks = '';
     for (var trackKey in this.tracks) {
       const { id, name, artist, album } = this.tracks[trackKey];
       printedTracks += `${id}: ${name} by ${artist} (${album})\n`;
     }
     return printedTracks;
   },

   // console.log(printTracks());

   // prints a list of tracks for a given playlist, in the form:
   // p01: Coding Music - 2 tracks
   // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
   // t02: Model View Controller by James Dempsey (WWDC 2003)

   printPlaylist: function(playlistId) {
     const { name, tracks } = this.playlists[playlistId];
     var trackInfo = `${playlistId}: ${name} - ${tracks.length} tracks\n`;

     for (let trackid of tracks) {
       const { name, artist, album } = this.tracks[trackid];
       trackInfo += `${trackid}: ${name} by ${artist} (${album})\n`
     }

     return trackInfo;
   },

   // console.log(printPlaylist('p01'));


   // console.log(printPlaylist());

   // adds an existing track to an existing playlist

   addTrackToPlaylist: function(trackId, playlistId) {

     var playlist = this.playlists[playlistId];
     if(!playlist) {
       console.log("Playlist does not exist");
       return;
     }

     var track = this.tracks[trackId];
     if (!track) {
       console.log("Track does not exist");
       return;
     }

     if (playlist.tracks.includes(trackId)) {
       console.log(trackId + " already exists in playlist.");
       return;
     }

     playlist.tracks.push(trackId);

     return playlist.tracks;
   },

   // console.log(addTrackToPlaylist('t03', 'p01'));

   // generates a unique id
   // (use this for addTrack and addPlaylist)

   uid: function() {
     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
   },


   // adds a track to the this

   addTrack: function(name, artist, album) {
     var id = this.uid();
     this.tracks[id] = { id, name, artist, album };
   },

   // addTrack("I'm too sexy for this shirt", "Right Said Fred", "Unknown")
   // console.log(this.tracks);

   // addTrack("This Kiss", "Faith Hill", "Something Or Other");
   // console.log(this.tracks);

   // adds a playlist to the this

   addPlaylist: function(name) {
     var id = this.uid();
     this.playlists[id] = { id, name, tracks: [] };
   },

   // STRETCH:
   // given a query string string, prints a list of tracks
   // where the name, artist or album contains the query string (case insensitive)
   // tip: use "string".search("tri")
   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

   printSearchResults: function(query) {
     var searchResults = '';
     for (var trackKey in this.tracks) {
       const { id, name, artist, album } = this.tracks[trackKey];
       var track = `${id}: ${name} by ${artist} (${album})\n`;
       if (track.search(new RegExp(query, 'i')) !== -1) {
         searchResults += track;
       }
     }
     return searchResults;
   },
}

// console.log(library.printPlaylists());
// console.log(library.printTracks());
// console.log(library.printPlaylist('p01'));
// console.log(library.addTrackToPlaylist('t03', 'p01'));
// library.addTrack("This Kiss", "Faith Hill", "Something Or Other");
// console.log(library.tracks);
// library.addPlaylist("Something Or Other");
// console.log(library.playlists);
// console.log(library.printSearchResults("oDel"));
