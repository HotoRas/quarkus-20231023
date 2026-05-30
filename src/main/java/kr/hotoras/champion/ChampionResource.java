package kr.hotoras.champion;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

public class ChampionResource {

    /**
     * 전체 목록 조회
     * 
     * @return 전체 챔피언 목록
     */
    @GET
    @Path("/champions")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Champion> list() {
        return Champion.listAll();
    }

    /**
     * 챔피언 삽입
     * 
     * @param champion 삽입할 챔피언
     */
    @POST
    @Path("/champions")
    @Transactional
    @Consumes(MediaType.APPLICATION_JSON)
    public void add(Champion champion) {
        champion.persist();
    }

    @GET
    @Path("/champion/{champ}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response search(@PathParam("champ") String champion) {
        Champion champ = Champion.findByName(champion);
        if (champ != null)
            return Response.ok(champ, MediaType.APPLICATION_JSON).build();
        // final fallback of not found
        return Response.status(404).build();
    }
}
