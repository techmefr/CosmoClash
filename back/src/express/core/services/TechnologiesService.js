export const technoFindAll = () => technologieModel.readAllTechnologies().then();
export const technoFind = id => technologieModel.readOneTechnologie(id).then();
export const technoCreated = () => technologieModel.createNewTechnologies (technologie).then();
export const putTechno = (technologie, id) => technologieModel.putTechnologies(...technologie, id).then();
export const patchTechno = (technologie, id) => technologieModel.patchTechnologies(...technologie, id).then();
export const deleteTechno = id => technologieModel.deleteTechnologie(id).then();