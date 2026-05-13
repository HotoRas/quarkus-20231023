package kr.hotoras.champion;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path("/champions")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ChampionResource {

    /**
     * 전체 목록 조회
     * 
     * @return 전체 챔피언 목록
     */
    @GET
    public List<Champion> list() {
        return Champion.listAll();
    }

    /**
     * 챔피언 삽입
     * 
     * @param champion 삽입할 챔피언
     */
    @POST
    @Transactional
    public void add(Champion champion) {
        champion.persist();
    }
}
