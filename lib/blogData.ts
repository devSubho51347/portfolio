export interface Blog {
    title: string;
    description: string;
    category: "NLP" | "MLOps" | "LLM" | "ML Theory" | "System Design";
    readTime: string;
    link: string;
}

export const blogs: Blog[] = [
    {
        title: "How Transformers Actually Work Under The Hood",
        description: "Breaking down attention mechanisms and architecture design decisions for production-scale models.",
        category: "NLP",
        readTime: "8 min read",
        link: "https://subhoblogs.hashnode.dev/building-transformer-from-scratch-using-pytorch-part-1"
    },
    {
        title: "Youtube QA Chatbot with OpenAI Whisper, Embeddings, ChatGPT & Pinecone",
        description: "Build a RAG-based chatbot that can answer questions about YouTube videos using OpenAI Whisper, Embeddings, ChatGPT & Pinecone.",
        category: "LLM",
        readTime: "12 min read",
        link: "https://blog.futuresmart.ai/youtube-qa-chatbot-with-openai-whisper-embeddings-chatgpt-pinecone"
    },
    {
        title: "Unleash Web Scraping Power with Selenium for Data Science",
        description: "Learn how to use Selenium for web scraping and data extraction for data science projects.",
        category: "Data Science",
        readTime: "10 min read",
        link: "https://blog.futuresmart.ai/unleash-web-scraping-power-with-selenium-for-data-science"
    },
    {
        title: "Harnessing OpenAI Embeddings for Advanced NLP: Text Similarity, Semantic Search, and Clustering",
        description: "Learn how to use OpenAI Embeddings for text similarity, semantic search, and clustering.",
        category: "NLP",
        readTime: "7 min read",
        link: "https://blog.futuresmart.ai/harnessing-openai-embeddings-for-advanced-nlp-text-similarity-semantic-search-and-clustering"
    },
    {
        title: "How to Combine RAG and LLM Steering for Reliable AI Systems",
        description: "Learn how to combine RAG and LLM Steering for reliable AI systems.",
        category: "LLM",
        readTime: "8 min read",
        link: "https://medium.com/towardsdev/how-to-combine-rag-and-llm-steering-for-reliable-ai-systems-3e1ca7f21d9e"
    },
    // {
    //     title: "How to Combine RAG and LLM Steering for Reliable AI Systems",
    //     description: "Learn how to combine RAG and LLM Steering for reliable AI systems.",
    //     category: "LLM",
    //     readTime: "15 min read",
    //     link: "https://medium.com/towardsdev/how-to-combine-rag-and-llm-steering-for-reliable-ai-systems-3e1ca7f21d9e"
    // }
];
