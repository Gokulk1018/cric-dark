export const matchDetails = {
  1: {
    status: "LIVE",
    toss: {
      winner: "IND",
      decision: "Bat",
    },

    teams: {
      IND: {
        playingXI: [
          {
            name: "Rohit Sharma",
            role: "Batter",
            hand: "Right",
            runs: 45,
            balls: 32,
            sr: 140.6,
          },
          {
            name: "Virat Kohli",
            role: "Batter",
            hand: "Right",
            runs: 78,
            balls: 55,
            sr: 141.8,
          },
        ],
      },

      AUS: {
        bowling: [
          {
            name: "Starc",
            overs: 8,
            runs: 42,
            wickets: 2,
            economy: 5.25,
            type: "Seam",
          },
        ],
      },
    },
  },

  2: {
    status: "UPCOMING",
    toss: null,

    teams: {
      RCB: {
        squad: [
          {
            name: "Virat Kohli",
            role: "Batter",
            hand: "Right",
            strikeRate: 138.4,
          },
          {
            name: "Dinesh Karthik",
            role: "WK",
            hand: "Right",
            strikeRate: 132.1,
          },
        ],
      },

      CSK: {
        squad: [
          {
            name: "Ruturaj Gaikwad",
            role: "Batter",
            hand: "Right",
            strikeRate: 135.6,
          },
        ],
      },
    },
  },
};
