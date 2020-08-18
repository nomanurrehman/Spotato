import React from 'react';

const EpisodeDetails = function episodeDetails() {
  return (
    <React.Fragment>
      <div className="col-lg-12">
        <h1 className="text-success text-center mb-3">Episode Name</h1>
      </div>
      <div className="col-lg-4">
        <img className="w-100" src="https://i.scdn.co/image/e40c78da2cb88471a6b18b6cf5e3d3f3c48b428a" />
      </div>
      <div className="col-lg-8">
        <table className="table table-dark table-striped table-bordered">
          <tbody>
            <tr>
              <td className="align-middle">Description</td>
              <td>Wir blicken auf die Highlights der virtuellen San Diego Comic Con zurück und fassen die Erkenntnisse aus der Justice Con in Bezug auf den Snyder Cut zusammen. Als Gast begrüßen wir diesmal Andy. Wir sind auch bei iTunes und NEU! bei Spotify zu finden und freuen uns über jeden neuen Abonnenten, sowie über euer Feedback. BatCast-Theme von Benjamin Müller Disclaimer: BatCast ist ein Podcast-Projekt von Fans für Fans. Batmannews.de und der BatCast stehen nicht in Verbindung mit Warner Bros. oder DC Comics.</td>
            </tr>
            <tr>
              <td className="align-middle">Duration</td>
              <td className="align-middle">03:03:10</td>
            </tr>
            <tr>
              <td className="align-middle">Release Date</td>
              <td className="align-middle">2020-09-09</td>
            </tr>
            <tr>
              <td className="align-middle">Language(s)</td>
              <td className="align-middle">de-DE</td>
            </tr>
            <tr>
              <td className="align-middle">Show</td>
              <td className="align-middle"><a href className="btn btn-sm btn-success">Show Name</a></td>
            </tr>
            <tr>
              <td className="align-middle">Publisher</td>
              <td className="align-middle">Batman News</td>
            </tr>
            <tr>
              <td className="align-middle">Preview</td>
              <td className="align-middle">
                <audio controls>
                  <source src="https://p.scdn.co/mp3-preview/40a4c11ce241a982819a1f69eb868ae41e50dae0?cid=774b29d4f13844c495f206cafdad9c86" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </td>
            </tr>
            <tr>
              <td className="align-middle">Actions</td>
              <td className="align-middle">
                <a className="btn btn-sm btn-success">Add to Playlist</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

EpisodeDetails.propTypes = {};
EpisodeDetails.defaultProps = {};

export default EpisodeDetails;
