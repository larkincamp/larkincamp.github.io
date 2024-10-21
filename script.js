function filterData() {
  event.preventDefault();
  var startdate = document.getElementById("startdate").value;
  var enddate = document.getElementById("enddate").value;
  console.log(startdate);
  console.log(enddate);
}

// Fetch data from the provided URL and populate the table
async function fetchPitchData() {
  try {
      const response = await fetch('https://compute.samford.edu/zohauth/clients/datajson/1');
      const data = await response.json();

      const tableBody = document.getElementById('pitch-data');

      data.forEach(pitch => {
          // Create a new row
          const row = document.createElement('tr');

          // Insert pitch number with a link
          const pitchNoCell = document.createElement('td');
          const link = document.createElement('a');
          link.href = `details.html?id=${pitch.PitchNo}`;
          link.textContent = `Pitch ${pitch.PitchNo}`;
          pitchNoCell.appendChild(link);
          row.appendChild(pitchNoCell);

          // Insert the remaining cells
          const dateCell = document.createElement('td');
          dateCell.textContent = pitch.Date;
          row.appendChild(dateCell);

          const timeCell = document.createElement('td');
          timeCell.textContent = pitch.Time;
          row.appendChild(timeCell);

          const batterCell = document.createElement('td');
          batterCell.textContent = pitch.Batter;
          row.appendChild(batterCell);

          const ballsCell = document.createElement('td');
          ballsCell.textContent = pitch.Balls;
          row.appendChild(ballsCell);

          const strikesCell = document.createElement('td');
          strikesCell.textContent = pitch.Strikes;
          row.appendChild(strikesCell);

          const outsCell = document.createElement('td');
          outsCell.textContent = pitch.Outs;
          row.appendChild(outsCell);

          const pitchCallCell = document.createElement('td');
          pitchCallCell.textContent = pitch.PitchCall;
          row.appendChild(pitchCallCell);

          const korBBCell = document.createElement('td');
          korBBCell.textContent = pitch.KorBB || '';
          row.appendChild(korBBCell);

          const relSpeedCell = document.createElement('td');
          relSpeedCell.textContent = pitch.RelSpeed || '';
          row.appendChild(relSpeedCell);

          const spinRateCell = document.createElement('td');
          spinRateCell.textContent = pitch.SpinRate || '';
          row.appendChild(spinRateCell);

          const spinAxisCell = document.createElement('td');
          spinAxisCell.textContent = pitch.SpinAxis || '';
          row.appendChild(spinAxisCell);

          // Append the row to the table
          tableBody.appendChild(row);
      });
  } catch (error) {
      console.error('Error fetching pitch data:', error);
  }
}

// Call the function to fetch and populate the data
fetchPitchData();