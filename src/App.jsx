import React, { useState, useRef } from 'react';

const data = [
   {
      "id": 1,
      "name": "React Query"
   },
   {
      "id": 2,
      "name": "React Hooks"
   },
   {
      "id": 3,
      "name": "React Router"
   },
   {
      "id": 4,
      "name": "React State Management"
   },
   {
      "id": 5,
      "name": "React Performance Optimization"
   },
   {
      "id": 6,
      "name": "React Tutorial"
   },
   {
      "id": 7,
      "name": "React Best Practices"
   },
   {
      "id": 8,
      "name": "React vs Vue"
   },
   {
      "id": 9,
      "name": "React Interview Questions"
   },
   {
      "id": 10,
      "name": "React Roadmap"
   },
   {
      "id": 11,
      "name": "Next.js Server Components"
   },
   {
      "id": 12,
      "name": "Next.js API Routes"
   },
   {
      "id": 13,
      "name": "Next.js Middleware"
   },
   {
      "id": 14,
      "name": "Next.js Authentication"
   },
   {
      "id": 15,
      "name": "Next.js Performance Optimization"
   },
   {
      "id": 16,
      "name": "Next.js Tutorial"
   },
   {
      "id": 17,
      "name": "Next.js vs React"
   },
   {
      "id": 18,
      "name": "Next.js SEO Best Practices"
   },
   {
      "id": 19,
      "name": "Next.js Roadmap"
   },
   {
      "id": 20,
      "name": "Next.js Interview Questions"
   },
   {
      "id": 21,
      "name": "TypeScript Basics"
   },
   {
      "id": 22,
      "name": "TypeScript Interfaces"
   },
   {
      "id": 23,
      "name": "TypeScript Generics"
   },
   {
      "id": 24,
      "name": "TypeScript Utility Types"
   },
   {
      "id": 25,
      "name": "TypeScript vs JavaScript"
   },
   {
      "id": 26,
      "name": "TypeScript Tutorial"
   },
   {
      "id": 27,
      "name": "TypeScript Best Practices"
   },
   {
      "id": 28,
      "name": "TypeScript Roadmap"
   },
   {
      "id": 29,
      "name": "TypeScript Interview Questions"
   },
   {
      "id": 30,
      "name": "TypeScript Performance Optimization"
   },
   {
      "id": 31,
      "name": "Node.js Streams"
   },
   {
      "id": 32,
      "name": "Node.js Event Loop"
   },
   {
      "id": 33,
      "name": "Node.js File System"
   },
   {
      "id": 34,
      "name": "Node.js Authentication"
   },
   {
      "id": 35,
      "name": "Node.js WebSockets"
   },
   {
      "id": 36,
      "name": "Node.js Tutorial"
   },
   {
      "id": 37,
      "name": "Node.js Best Practices"
   },
   {
      "id": 38,
      "name": "Node.js vs Deno"
   },
   {
      "id": 39,
      "name": "Node.js Performance Optimization"
   },
   {
      "id": 40,
      "name": "Node.js Interview Questions"
   },
   {
      "id": 41,
      "name": "Redux Toolkit"
   },
   {
      "id": 42,
      "name": "Redux Middleware"
   },
   {
      "id": 43,
      "name": "Redux Thunk"
   },
   {
      "id": 44,
      "name": "Redux Saga"
   },
   {
      "id": 45,
      "name": "Redux vs Context API"
   },
   {
      "id": 46,
      "name": "Redux Tutorial"
   },
   {
      "id": 47,
      "name": "Redux Best Practices"
   },
   {
      "id": 48,
      "name": "Redux Performance Optimization"
   },
   {
      "id": 49,
      "name": "Redux Interview Questions"
   },
   {
      "id": 50,
      "name": "Redux Roadmap"
   },
   {
      "id": 51,
      "name": "Tailwind CSS Grid"
   },
   {
      "id": 52,
      "name": "Tailwind CSS Flexbox"
   },
   {
      "id": 53,
      "name": "Tailwind CSS Animations"
   },
   {
      "id": 54,
      "name": "Tailwind CSS Responsive Design"
   },
   {
      "id": 55,
      "name": "Tailwind CSS Dark Mode"
   },
   {
      "id": 56,
      "name": "Tailwind CSS Tutorial"
   },
   {
      "id": 57,
      "name": "Tailwind CSS Best Practices"
   },
   {
      "id": 58,
      "name": "Tailwind CSS vs Bootstrap"
   },
   {
      "id": 59,
      "name": "Tailwind CSS Performance Optimization"
   },
   {
      "id": 60,
      "name": "Tailwind CSS Interview Questions"
   }
];


const SimpleAutofill = () => 
{
  const [input, setInput] = useState('');

  const [filteredItems, setFilteredItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const ref = useRef(new SimpleCache(10));
  const dref = useRef(null);

  const handleDebounce = (bounce) =>
  {
    const value = bounce.target.value;
    setInput(value);

    if (value.length > 0)
    {
      setShowDropdown(true);
    }
    else
    {
      setShowDropdown(false);
      setFilteredItems([]);
    }

    if (dref.current) clearTimeout(dref.current);
    dref.current = setTimeout(() => 
    {
      if (value.length === 0) return;
      const cachedResult = ref.current.get(value);
      if (cachedResult) 
      {
        setFilteredItems(cachedResult);
        return;
      }
      const result = data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      ref.current.set(value, result);
      setFilteredItems(result);
    }, 300);
  };

  return (

    <div
      style={{
        width: '600px',
        fontFamily: 'Arial',
        position: 'relative',
      }}
    >

      <div>
        <input
          type="text"
          placeholder="Start Typing..."
          value={input}
          onChange={handleDebounce}
          style={{
            width: '100%',
            padding: '10px 40px 10px 15px',
            borderRadius: '25px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            outline: 'none',
            fontSize: '16px',
          }}
        />
        
        {input && (
          <button
            onClick={() => {
              setInput('');
              setShowDropdown(false);
            }}
            style={{
              position: 'absolute',
              right: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
              color: 'grey',
              padding: 0,
            }}
          >X
          </button>
        )}
      </div>

      {showDropdown && filteredItems.length > 0 && 
      (
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            marginTop: '10px',
            maxHeight: '400px',
            overflowY: 'auto',
            scrollbarWidth: 'none',
            position: 'absolute',
            width: '100%',
            backgroundColor: 'white',
            color: '#007BFF',
            borderRadius: '15px',
            border: '1px solid #ccc',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          {filteredItems.map((item) => (
            <li
              key={item.id}
              style={{
                padding: '8px',
                cursor: 'pointer',
              }}
              onMouseDown={() => {
                setInput(item.name);
                setShowDropdown(false);
              }}
            >
              {HighlightMatch(item.name, input)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


const HighlightMatch = (text, query) => 
{
  if (!query) return text;
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerText.indexOf(lowerQuery);

  if (index === -1) 
  {
    return text;
  }

  const before = text.substring(0, index);
  const match = text.substring(index, index + query.length);
  const after = text.substring(index + query.length);

  return (
    <>
      <span>{before}</span>
      <strong>{match}</strong>
      <span>{after}</span>
    </>
  );
};


class SimpleCache
{
  constructor(lim = 10) 
  {
    this.limit = lim;
    this.cache = {};
    this.keys = [];
  }

  get(key)
  {
    if (this.cache.hasOwnProperty(key)) 
      {
        return this.cache[key];
      }
    return null;
  }

  set(key, value)
  {
    if (!this.cache.hasOwnProperty(key))
    {
      if (this.keys.length >= this.limit) 
      {
        const oldestKey = this.keys.shift();
        delete this.cache[oldestKey];
      }
      this.keys.push(key);
    }
    this.cache[key] = value;
  }
}

function App() 
{
  return (
<div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh',           
  width: '100%',
  flexDirection: 'column',
  backgroundColor: 'white'
}}>
      <h1 style={{ fontWeight: '550', fontFamily: 'Arial', color: '#007BFF', fontSize: '50px' }}>SearchPro</h1>
      <SimpleAutofill/>
    </div>
  );
}


export default App;