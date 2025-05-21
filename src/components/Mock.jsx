const mockData = [
  {
    book: {
      id: "1",
      title: "The Night Circus",
      author: "Erin Morgenstern",
      description: "A magical competition between two young illusionists spirals into a deep, enchanted romance.",
      coverImage: "https://covers.openlibrary.org/b/id/8231996-L.jpg"
    },
    playlist: {
      title: "Whimsical & Mysterious",
      tracks: [
        { title: "Nightbook", artist: "Ludovico Einaudi", duration: "5:50" },
        { title: "Midnight City", artist: "M83", duration: "4:04" },
        { title: "Experience", artist: "Ludovico Einaudi", duration: "5:15" }
      ]
    }
  },
  {
    book: {
      id: "2",
      title: "Daisy Jones & The Six",
      author: "Taylor Jenkins Reid",
      description: "A fictional oral history of a 1970s rock band and their tumultuous rise to fame.",
      coverImage: "https://covers.openlibrary.org/b/id/10958347-L.jpg"
    },
    playlist: {
      title: "Retro Rock Vibes",
      tracks: [
        { title: "Dreams", artist: "Fleetwood Mac", duration: "4:17" },
        { title: "Go Your Own Way", artist: "Fleetwood Mac", duration: "3:43" },
        { title: "Rhiannon", artist: "Fleetwood Mac", duration: "4:12" }
      ]
    }
  },
  {
    book: {
      id: "3",
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel about a totalitarian regime and the power of surveillance.",
      coverImage: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
    },
    playlist: {
      title: "Dystopian Pulse",
      tracks: [
        { title: "Everybody’s Got Something to Hide", artist: "The Beatles", duration: "2:24" },
        { title: "Radioactive", artist: "Imagine Dragons", duration: "3:06" },
        { title: "Welcome to the Machine", artist: "Pink Floyd", duration: "7:31" }
      ]
    }
  }
];

export default mockData;