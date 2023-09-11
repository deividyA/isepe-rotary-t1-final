import React, { useState } from 'react';

const SubmitButton = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: { email, password } }), // Updated body structure
      });
  
      if (response.ok) {
        console.log('ok');
      } else {
        console.log('nao ok');
      }
    } catch (error) {
      console.error('OOPS', error);
    }
  };
    
    return (
        <React.Fragment>

            <div class="fixed inset-0 bg-blue-700 flex items-center justify-center" >
                <div class="rounded-3xl h-5/6 w-4/6 bg-white text-center" >
                <form action="/auth/login" method="POST" onSubmit={handleSubmit}>
                        <div className="field">
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoFocus
                                autoComplete="email"
                            />
                        </div>

                        <div className="field">
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                        </div>
                        
                        <div className="actions">
                            <button type="submit">Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}
export default SubmitButton