import React from 'react';

const Question = () => {
    return (
        <>
            <header className="mt-4">
                <h2>Assignment Questions :</h2>
            </header>

            <main>

                <div className="accordion mt-4" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                1. what is the difference between props and state in react ?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Props and State :</strong> Props are used to pass data from one component to another and props are read only and cannot be changed. On the otherhand state is a local data storage that is local to the component only and cannot be passed to other components & it can be modified .
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                2. How does useState work in react ?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>useState : </strong> In react useState is a built-in hook in React that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update the state value.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                3. What else can UseEffect do other than load data in react ?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>useEffect : </strong> The useEffect hook in React is used to manage side effects, which are any tasks that must be performed outside of the normal React rendering cycle.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                4. How does react work ?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>React : </strong> React is a JavaScript library that helps developers build user interfaces. It uses a virtual DOM to efficiently update the UI, making it faster and more responsive. React components manage their own state and can interact with other components through props. 
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );
};

export default Question;