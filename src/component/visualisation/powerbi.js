import { PowerBIEmbed } from "powerbi-client-react";
import { models } from 'powerbi-client'


function Power(){
    return(
        <div>
          <PowerBIEmbed
    embedConfig = {{
        type: 'report',   // Supported types: report, dashboard, tile, visual and qna
        id: 'ce00de22-2278-4a01-ab0c-30f956c2dd51',
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=ce00de22-2278-4a01-ab0c-30f956c2dd51&groupId=b1acb94d-ab03-4c36-bf44-80705b00fbbf&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImFuZ3VsYXJPbmx5UmVwb3J0RW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFpvbmVQYXRjaCI6dHJ1ZX19",
        accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMTAxNjNhNGQtZmZmNi00ODAyLWI3NTItZDMzNTQ4NTgyNmVmLyIsImlhdCI6MTY0MTc2NzI1OCwibmJmIjoxNjQxNzY3MjU4LCJleHAiOjE2NDE3NzI3NTYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFEczk3aWIwNEFQSCtNbWZjNHdXRkZZZ2NFdzdmR2JoTFhhU2ZhQWg0M2dVYVVSc0xzcDVjanByeTRhcHRmQ2kvIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiS1JJTUNISSIsImdpdmVuX25hbWUiOiJNb--_vXRheiIsImlwYWRkciI6IjE5Ni43NS4yLjk4IiwibmFtZSI6Ik1v77-9dGF6IEtSSU1DSEkiLCJvaWQiOiI3YjhmMzhkMC1lMmY0LTQ3YWEtOGI2NS0yZGM3Y2NjMDVhYzQiLCJwdWlkIjoiMTAwMzIwMDA3QUNFMkY5NSIsInJoIjoiMC5BUkVBVFRvV0VQYl9Ba2kzVXRNMVNGZ203dzhCSElkaFhyRlBnNnlZWVFwLWtSQVJBQVEuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiWTZQVk14ZGQ2Nm9wZXBwZzNQTVplSERweTRHOEhsZHJZNUdOenlESzBGWSIsInRpZCI6IjEwMTYzYTRkLWZmZjYtNDgwMi1iNzUyLWQzMzU0ODU4MjZlZiIsInVuaXF1ZV9uYW1lIjoibW9hdGF6a3JpbWNoaUBzdHVkZW50LmVtaS5hYy5tYSIsInVwbiI6Im1vYXRhemtyaW1jaGlAc3R1ZGVudC5lbWkuYWMubWEiLCJ1dGkiOiJSQ1JudVhpaGhFMlh6c2dCZk9tQ0FRIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.D-HXCbwyrBw-JlsVxtrNEP_c7mXNEmQy6iAOaKT1PnpVCLvSwbBRkEio52r3Z3s05Gq88QpO5en7pNVusb-uC7GMv5usRQaMWez7AQSRbe2OV531q9YSkR1pZvdD7T7NGclBvamUsJ7JpRAedXyQeQesLYyTNiEzXr2YZHP5MhDS5WQSOhdc4MSJL4uxwQprVdyf_9tKJvnEVGMMadfCYBzkUlksnI7R3us18K3_dfszG9YjxW8u7dQwLh0RBJVJIifTjyqO58DHS-6fgVz5Grfjxc5pbsHaGhW0z8BEV4PO57YJuKbA3GiOQZjKn-gyRczrkO6F0r5YVA-2uDFFJA',
        tokenType: models.TokenType.Aad,
        settings: {
            panes: {
                filters: {
                    expanded: false,
                    visible: false
                }
            },
            background: models.BackgroundType.Transparent,
        }
    }}

    eventHandlers = { 
        new Map([
            ['loaded', function () {console.log('Report loaded');}],
            ['rendered', function () {console.log('Report rendered');}],
            ['error', function (event) {console.log(event.detail);}]
        ])
    }
        
    cssClassName = { "Embed-container" }

    getEmbeddedComponent = { (embeddedReport) => {
        window.report = embeddedReport;
    }}
/>

        </div>
    );
}
export default Power;