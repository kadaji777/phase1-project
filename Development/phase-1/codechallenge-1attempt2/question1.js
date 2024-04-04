function calculateGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

function main() {
    const marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a valid mark between 0 and 100.");
    } else {
        const grade = calculateGrade(marks);
        console.log("Grade: " + grade);
    }
}

// Call the main function
main();