import React, { useEffect, useState } from "react";
import { marked } from "marked";

const MarkdownRenderer = () => {
    const [content, setContent] = useState("");
    const [error, setError] = useState(null);
    const [file, setFile] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const fileParam = params.get("q");

        if (!fileParam) {
            setError("No file specified");
            return;
        }

        setFile(fileParam);

        const fetchMarkdown = async () => {
            try {
                const response = await fetch(`/md/${fileParam}.md`);
                if (!response.ok) {
                    throw new Error(`Could not fetch ${fileParam}.md`);
                }
                const text = await response.text();
                setContent(marked(text));
            } catch (err) {
                setError(err.message);
            }
        };

        fetchMarkdown();
    }, []);

    if (error) {
        return <div style={{ color: "red" }}>{error}</div>;
    }

    if (!file) {
        return <div>Loading...</div>;
    }
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default MarkdownRenderer;
