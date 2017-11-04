package laboratorioC.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import laboratorioC.model.MapPinned;
import laboratorioC.persistence.MapPinnedDao;

@Component
public class MapPinnedServiceImpl implements MapPinnedService {

	@Autowired
	private MapPinnedDao mapPinnedDao;
	
	@Override
	public MapPinned getMapById(int id) {
		return mapPinnedDao.getMapById(id);
	}

	@Override
	public MapPinned createMap(String name, String description, int authorId, float initLatitude, float initLongitude, int zoom) {
		return mapPinnedDao.createMap(name, description, authorId, initLatitude, initLongitude, zoom);
	}

}
