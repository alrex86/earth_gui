export type buildingsType = {
    name: string,
    amt: number,
    
}

export type allBuildingsType = {
    farm: buildingsType,
    researchLab: buildingsType,
    business: buildingsType,
    residential: buildingsType,
    constructionSite: buildingsType
}

export type countryType = {
    land: number,
    networth: number,
    population: number,
    allBuildings: allBuildingsType,
    cash: number,
    name: string
}

export type responseType = {
    status: number, 
    code: number, 
    message: string, 
    payload: any
  
}

