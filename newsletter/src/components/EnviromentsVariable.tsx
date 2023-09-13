import React from "react";

function EnvironmentVariables() {
    return (
        <div>
            <p>
                REACT_APP_SUPABASE_URL: {import.meta.env.REACT_APP_SUPABASE_URL}
            </p>
            <p>
                REACT_APP_SUPABASE_KEY: {import.meta.env.REACT_APP_SUPABASE_KEY}
            </p>
        </div>
    );
}

export default EnvironmentVariables;
