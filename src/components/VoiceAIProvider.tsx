'use client';

import { useState } from 'react';
import { useVoiceAI } from '@/hooks/useVoiceAI';
import VoiceAIFab from './ui/voice-ai-fab';
import VoiceAIAssistant from './ui/voice-ai-assistant';

interface VoiceAIProviderProps {
  children: React.ReactNode;
}

export default function VoiceAIProvider({ children }: VoiceAIProviderProps) {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const voiceAI = useVoiceAI();

  const handleFabClick = () => {
    setIsAssistantOpen(true);
  };

  const handleCloseAssistant = () => {
    setIsAssistantOpen(false);
    if (voiceAI.isConnected) {
      voiceAI.disconnect();
    }
  };

  const handleConnect = async () => {
    try {
      console.log('Starting voice AI connection...');
      
      // Generate a unique room name for this session
      const roomName = `portfolio-voice-${Date.now()}`;
      console.log('Generated room name:', roomName);
      
      // Get token from the Render deployment
      console.log('Fetching token from backend...');
      console.log('Backend URL: https://portfolio-voice-ai.onrender.com/generate-token');
      
      const requestBody = {
        roomName: roomName,
        participantName: `visitor-${Date.now()}`
      };
      console.log('Request body:', requestBody);
      
      const response = await fetch('https://portfolio-voice-ai.onrender.com/generate-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Token fetch failed:', {
          status: response.status,
          statusText: response.statusText,
          errorText,
          url: response.url
        });
        throw new Error(`Backend request failed: ${response.status} ${response.statusText} - ${errorText}`);
      }

      const tokenData = await response.json();
      console.log('Token response received:', {
        hasToken: !!tokenData.token,
        hasLivekitUrl: !!tokenData.livekitUrl,
        participantName: tokenData.participantName,
        roomName: tokenData.roomName
      });
      
      if (!tokenData.token || !tokenData.livekitUrl) {
        throw new Error('Invalid token response: missing token or LiveKit URL');
      }
      
      const config = {
        livekitUrl: tokenData.livekitUrl,
        token: tokenData.token
      };
      
      console.log('Connecting to LiveKit with URL:', tokenData.livekitUrl);
      await voiceAI.connect(config);
      console.log('Voice AI connection initiated successfully');
    } catch (error) {
      console.error('Failed to connect to voice AI:', error);
      console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
      
      let errorMessage = 'Unknown error occurred';
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      
      // More user-friendly error messages
      if (errorMessage.includes('fetch')) {
        errorMessage = 'Cannot connect to voice AI backend. Please check your internet connection.';
      } else if (errorMessage.includes('token')) {
        errorMessage = 'Failed to get authentication token. Please try again.';
      }
      
      alert(`Voice AI connection failed: ${errorMessage}\n\nCheck the browser console for more details.`);
    }
  };

  return (
    <>
      {children}
      
      {/* Floating Action Button */}
      <VoiceAIFab 
        onClick={handleFabClick}
        isActive={voiceAI.isConnected && (voiceAI.isListening || voiceAI.isSpeaking)}
      />
      
      {/* Voice AI Assistant Panel */}
      <VoiceAIAssistant
        isOpen={isAssistantOpen}
        onClose={handleCloseAssistant}
        onConnect={handleConnect}
        isConnected={voiceAI.isConnected}
        isListening={voiceAI.isListening}
        isSpeaking={voiceAI.isSpeaking}
      />
    </>
  );
}
