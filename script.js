// Handle form submission
document.getElementById('marksForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const zoology = parseInt(document.getElementById('zoology').value);
    const botany = parseInt(document.getElementById('botany').value);
    const chemistry = parseInt(document.getElementById('chemistry').value);
    const physics = parseInt(document.getElementById('physics').value);
    const english = parseInt(document.getElementById('english').value);

    // Calculate total and percentage
    const total = zoology + botany + chemistry + physics + english;
    const percentage = (total / 500) * 100;

    // Display results
    document.getElementById('totalMarks').textContent = 'Total Marks: ' + total + '/500';
    document.getElementById('percentage').textContent = 'Percentage: ' + percentage.toFixed(2) + '%';

    // Determine pass or fail (assuming passing marks are 40%)
    let status = 'Result: Passed';
    if (percentage < 40 || zoology < 40 || botany < 40 || chemistry < 40 || physics < 40 || english < 40) {
        status = 'Result: Failed';
    }
    document.getElementById('status').textContent = status;

    // Show the result section
    document.getElementById('result').style.display = 'block';
});
