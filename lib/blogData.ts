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
        link: "https://medium.com/@yourprofile/transformers-explained"
    },
    {
        title: "Scaling MLOps: From Notebook to Kubernetes",
        description: "A comprehensive guide on automating model retraining and deployment pipelines.",
        category: "MLOps",
        readTime: "12 min read",
        link: "https://medium.com/@yourprofile/scaling-mlops"
    },
    {
        title: "Large Language Models in Production",
        description: "Solving the challenges of latency, cost, and hallucination in enterprise LLM applications.",
        category: "LLM",
        readTime: "10 min read",
        link: "https://medium.com/@yourprofile/llm-production"
    },
    {
        title: "The Future of Vector Databases",
        description: "Why retrieval-augmented generation is becoming the standard for contextual AI.",
        category: "System Design",
        readTime: "7 min read",
        link: "https://medium.com/@yourprofile/vector-db"
    },
    {
        title: "Distributed Training with PyTorch",
        description: "Optimizing training loops across multi-GPU clusters for faster iteration.",
        category: "ML Theory",
        readTime: "15 min read",
        link: "https://medium.com/@yourprofile/distributed-training"
    }
];
