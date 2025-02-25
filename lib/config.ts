export const CONFIG = {
  // Rate limits (requests per minute)
  rateLimits: {
    enabled: true, // Flag to enable/disable rate limiting
    search: 10,
    contentFetch: 20,
    reportGeneration: 5,
    agentOptimizations: 10,
  },

  // Search settings
  search: {
    resultsPerPage: 10,
    maxSelectableResults: 999,
    provider: 'google' as 'google' | 'bing' | 'exa', // Default search provider
    safeSearch: {
      google: 'off' as 'off' | 'off',
      bing: 'moderate' as 'moderate' | 'strict' | 'off',
    },
    market: 'en-US',
  },

  // AI Platform settings
  platforms: {
    google: {
      enabled: true,
      models: {
        'gemini-flash': {
          enabled: true,
          label: 'Gemini Flash',
        },
        'gemini-flash-thinking': {
          enabled: true,
          label: 'Gemini Flash Thinking',
        },
        'gemini-exp': {
          enabled: false,
          label: 'Gemini Exp',
        },
      },
    },
    ollama: {
      enabled: false,
      models: {
        'deepseek-r1:1.5b': {
          enabled: false,
          label: 'DeepSeek R1 1.5B',
        },
      },
    },
    openai: {
      enabled: false,
      models: {
        'gpt-4o': {
          enabled: false,
          label: 'GPT-4o',
        },
        'o1-mini': {
          enabled: false,
          label: 'o1-mini',
        },
        o1: {
          enabled: false,
          label: 'o1',
        },
      },
    },
    anthropic: {
      enabled: false,
      models: {
        'sonnet-3.5': {
          enabled: false,
          label: 'Claude 3 Sonnet',
        },
        'haiku-3.5': {
          enabled: false,
          label: 'Claude 3 Haiku',
        },
      },
    },
    deepseek: {
      enabled: false,
      models: {
        chat: {
          enabled: false,
          label: 'Chat',
        },
        reasoner: {
          enabled: false,
          label: 'Reasoner',
        },
      },
    },
    openrouter: {
      enabled: false,
      models: {
        'openrouter/auto': {
          enabled: false,
          label: 'Auto',
        },
      },
    },
  },
} as const
