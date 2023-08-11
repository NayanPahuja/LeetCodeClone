import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './random.css'; // Import your CSS animation

const RandomProblem = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Function to navigate to a random problem
    const navigateToRandomProblem = async () => {
      const randomProblemId = Math.floor(Math.random() * 8) + 1;
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulating a delay
      navigate(`/problem/${randomProblemId}`);
    };

    // Navigate to a random problem when the component renders
    navigateToRandomProblem();
  }, [navigate]);

  // Use the loading spinner animation
  return (
    <div class = 'anim-container'>
    <div className="loading-spinner"></div>
    </div>
  );
};

export default RandomProblem;
