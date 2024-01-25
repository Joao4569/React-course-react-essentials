import { useState } from 'react'; // 'use' = React Hooks - used within React components or in custom hooks
import TabButton from '../components/TabButton.jsx';
import Section from '../components/Section.jsx';
import Tabs from '../components/Tabs.jsx';
import { EXAMPLES } from '../data.js';

export default function Examples() {
  // Set up useState hook to track the selected topic
  const [ selectedTopic, setSelectedTopic ] = useState();

  // Handle the click event for each tab button
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', or 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  console.log('App component executed');

  // Tab content logic
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id='examples'>
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
            >
              Components
            </TabButton>

            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>

            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
            >
              Props
            </TabButton>

            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
            >
              State
            </TabButton>
          </>
      }>
        {tabContent}
      </Tabs>
    </Section>
  );
}