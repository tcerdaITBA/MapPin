package laboratorioC.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import laboratorioC.model.MapPin;
import laboratorioC.model.PinCategory;
import laboratorioC.persistence.MapPinDao;

@Component
public class MapPinServiceImpl implements MapPinService {

	@Autowired
	private MapPinDao mapPinDao;
		
	@Override
	public MapPin createMapPin(String name, String description, PinCategory pinCategory, String imageurl, float latitude, float longitude, int mapPinTabId) {
		return mapPinDao.createMapPin(name, description, pinCategory, imageurl, latitude, longitude, mapPinTabId);
	}

}
