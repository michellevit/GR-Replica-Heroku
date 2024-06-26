import React from 'react';

const FAQ = () => {
  return (
    <div>
      <div id="main-content">
        <h3>Learn the ins and outs of Gumroad.</h3>
        <div className="mini-rule"></div>
        <ol>
          <li>
            <h4>What can I charge per link?</h4>
            <p>
              Each link can be as little as $0.99 and as much as $999. Feel limited? <a href="mailto:hi@gumroad.com">Email us</a>.
            </p>
          </li>
          <li>
            <h4>What is Gumroad's cut?</h4>
            <p>Simple. It's 5% + $0.30 for each transaction. We're working hard to get this lower.</p>
          </li>
          <li>
            <h4>How do I get paid?</h4>
            <p>A PayPal deposit at the end of every month. We are looking into alternatives.</p>
          </li>
          <li>
            <h4>Why is this FAQ so short?</h4>
            <p>
              We believe that with simple products come short FAQs. Please <a href="mailto:hi@gumroad.com">send us an email</a> if you have a question that isn't answered here.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default FAQ;